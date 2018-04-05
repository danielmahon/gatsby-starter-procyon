import React, { Component } from 'react';
import { DefaultDraftBlockRenderMap, convertToRaw } from 'draft-js';
import { Editor, createEditorState, EditorState } from 'medium-draft';
import mediumDraftImporter from 'medium-draft/lib/importer';
import netlifyIdentity from 'netlify-identity-widget';
import Markdown from 'react-markdown';
import Immutable from 'immutable';
import _ from 'lodash';
import { Grid, Typography, IconButton } from 'material-ui';
import FormatListBulleted from 'mdi-material-ui/FormatListBulleted';
import FormatListNumbers from 'mdi-material-ui/FormatListNumbers';
import FormatQuoteOpen from 'mdi-material-ui/FormatQuoteOpen';
import History from 'mdi-material-ui/History';
import ContentSave from 'mdi-material-ui/ContentSave';
import { markdownToDraft, draftToMarkdown } from 'markdown-draft-js';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from '../utils/styled';
import DraftTypography from './DraftTypography';
import Button from './Button';

const Wrapper = styled('div')(theme => ({
  position: 'relative',
  '& .md-RichEditor-root': {
    padding: 0,
  },
  '& .md-RichEditor-editor .public-DraftEditor-content': {
    padding: 0,
    margin: 0,
  },
  '& .public-DraftEditor-content .md-block:first-child': {
    marginTop: '1em',
  },
  borderRight: `2px solid ${theme.palette.secondary[100]}`,
}));

const Buttons = styled('div')(theme => ({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  bottom: -theme.spacing.unit * 8,
  right: 0,
  borderTop: `2px solid ${theme.palette.secondary[100]}`,
}));

const blockRenderMap = Immutable.Map({
  'header-one': {
    element: 'div',
    wrapper: <DraftTypography variant="display1" />,
  },
  'header-two': {
    element: 'div',
    wrapper: <DraftTypography variant="title" />,
  },
  'header-three': {
    element: 'div',
    wrapper: <DraftTypography variant="subheading" />,
  },
  'header-four': {
    element: 'div',
    wrapper: <DraftTypography variant="body2" />,
  },
  'header-five': {
    element: 'div',
    wrapper: <DraftTypography variant="body2" />,
  },
  'header-six': {
    element: 'div',
    wrapper: <DraftTypography variant="body2" />,
  },
  blockquote: {
    element: 'blockquote',
    wrapper: <DraftTypography variant="body1" />,
  },
  pre: {
    element: 'pre',
    wrapper: <DraftTypography variant="body1" />,
  },
  figure: {
    element: 'figure',
    wrapper: <DraftTypography variant="body1" />,
  },
  'unordered-list-item': {
    element: 'li',
    wrapper: <DraftTypography variant="body1" component="ul" />,
  },
  'ordered-list-item': {
    element: 'li',
    wrapper: <DraftTypography variant="body1" component="ul" />,
  },
  unstyled: { element: DraftTypography },
});
// keep support for other draft default block types and add our myCustomBlock type
const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);

class EditableMarkdown extends Component {
  state = {
    user: null,
    source: null,
    originalEditorState: null,
    editorState: null,
  };
  componentDidMount() {
    const { source } = this.props;
    const user = netlifyIdentity.currentUser();
    var rawObject = markdownToDraft(source);
    var editorState = createEditorState(rawObject);
    if (user) {
      this.setState({
        user,
        source,
        editorState,
        originalEditorState: editorState,
      });
    } else {
      this.setState({ source });
    }
    netlifyIdentity.on('init', user =>
      this.setState({
        user,
        source,
        editorState,
        originalEditorState: editorState,
      })
    );
    netlifyIdentity.on('login', user =>
      this.setState({
        user,
        source,
        editorState,
        originalEditorState: editorState,
      })
    );
    netlifyIdentity.on('logout', () =>
      this.setState({
        user: null,
        originalEditorState: null,
        editorState: null,
      })
    );
  }
  onChange = editorState => {
    this.setState({ editorState });
  };
  handleReset = () => {
    const { originalEditorState } = this.state;
    this.setState({ editorState: originalEditorState });
  };
  handleSave = ({ updateNode }) => () => {
    const { editorState } = this.state;
    const { handleSave, node } = this.props;
    const markdown = draftToMarkdown(
      convertToRaw(editorState.getCurrentContent())
    );
    this.setState({ source: markdown, originalEditorState: editorState });
    updateNode({ variables: { id: node.id, content: markdown } });
    console.log('Synced to GraphCMS');
  };
  updateState = data => {
    const markdown = data[Object.keys(data)[0]].content;
    var rawObject = markdownToDraft(markdown);
    var editorState = createEditorState(rawObject);
    this.setState({ editorState });
  };
  render() {
    let { user, source, editorState, originalEditorState } = this.state;
    const { node = {}, mutation } = this.props;
    if (editorState) {
      const GET_NODES = gql`
        query {
          nodes @client {
            id
            title
            content
          }
        }
      `;
      return (
        <Query query={GET_NODES}>
          {({ data: { nodes }, client }) => {
            const localNode = _.find(nodes, { id: node.id });
            if (localNode) {
              const rawObject = markdownToDraft(localNode.content);
              editorState = createEditorState(rawObject);
            }
            return (
              <Mutation
                mutation={mutation}
                onCompleted={this.updateState}
                update={(cache, { data }) => {
                  const myData = data[Object.keys(data)[0]];
                  myData.__typename = 'Node';
                  cache.writeData({
                    data: { nodes: _.unionBy(nodes, [myData], 'id') },
                  });
                }}
              >
                {updateNode => {
                  return (
                    <Wrapper>
                      <Editor
                        editorState={editorState}
                        onChange={this.onChange}
                        blockRenderMap={extendedBlockRenderMap}
                        blockStyleFn={() => ''}
                        toolbarConfig={{
                          inline: ['BOLD', 'ITALIC', 'UNDERLINE', 'hyperlink'],
                        }}
                        blockButtons={[
                          {
                            label: 'H2',
                            style: 'header-two',
                            icon: 'header',
                            description: 'Heading 2',
                          },
                          {
                            label: 'H3',
                            style: 'header-three',
                            icon: 'header',
                            description: 'Heading 3',
                          },
                          {
                            label: (
                              <FormatListBulleted
                                style={{
                                  width: 18,
                                  height: 18,
                                  marginBottom: -4,
                                }}
                              />
                            ),
                            style: 'unordered-list-item',
                            icon: 'list-ul',
                            description: 'Unordered List',
                          },
                          {
                            label: (
                              <FormatListNumbers
                                style={{
                                  width: 18,
                                  height: 18,
                                  marginBottom: -4,
                                }}
                              />
                            ),
                            style: 'ordered-list-item',
                            icon: 'list-ol',
                            description: 'Ordered List',
                          },
                          {
                            label: (
                              <FormatQuoteOpen
                                style={{
                                  width: 18,
                                  height: 18,
                                  marginBottom: -4,
                                }}
                              />
                            ),
                            style: 'blockquote',
                            icon: 'quote-right',
                            description: 'Blockquote',
                          },
                        ]}
                      />
                      <Buttons>
                        <IconButton
                          size="small"
                          disabled={editorState === originalEditorState}
                          onClick={this.handleReset}
                          style={{ zIndex: 100 }}
                        >
                          <History />
                        </IconButton>
                        <IconButton
                          size="small"
                          color="secondary"
                          disabled={editorState === originalEditorState}
                          onClick={this.handleSave({ updateNode, client })}
                          style={{ zIndex: 100 }}
                        >
                          <ContentSave />
                        </IconButton>
                      </Buttons>
                    </Wrapper>
                  );
                }}
              </Mutation>
            );
          }}
        </Query>
      );
    }
    return (
      <Typography component={Markdown} source={source} escapeHtml={false} />
    );
  }
}

export default EditableMarkdown;
