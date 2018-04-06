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
import { Mutation, Query, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import styled from '../utils/styled';
import DraftTypography from './DraftTypography';
import Button from './Button';

// TODO: Clean this shit up!

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
  marginRight: -2,
  borderRight: `2px solid ${theme.palette.secondary[100]}`,
}));

const Buttons = styled('div')(theme => ({
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  bottom: -theme.spacing.unit * 8 - 2,
  right: -2,
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

const GET_NODES = gql`
  query {
    nodes @client {
      id
      content
    }
  }
`;

class EditableMarkdown extends Component {
  state = {
    user: null,
    nodes: [],
    source: null,
    originalEditorState: null,
    editorState: null,
  };
  componentDidMount() {
    const { source, client, node = {} } = this.props;
    const user = netlifyIdentity.currentUser();
    let markdown = source;
    let rawObject = markdownToDraft(markdown);
    // See if we have a locally saved node
    // Saving triggers a server rebuild so we store data locally
    // to account for the delay
    client.query({ query: GET_NODES }).then(({ data: { nodes } }) => {
      const localNode = _.find(nodes, { id: node.id });
      if (localNode) {
        markdown = localNode.content;
        rawObject = markdownToDraft(markdown);
      }
      const editorState = createEditorState(rawObject);
      // If user logged in then show editor
      if (user) {
        this.setState({
          user,
          nodes,
          source: markdown,
          editorState,
          originalEditorState: editorState,
        });
      } else {
        // If user not logged in source regular text
        this.setState({ source: markdown });
      }
      // Login handlers
      netlifyIdentity.on(
        'login',
        this.onLogin({ nodes, markdown, editorState })
      );
      netlifyIdentity.on('logout', this.onLogout);
    });
  }
  onChange = editorState => {
    this.setState({ editorState });
  };
  onLogin = ({ nodes, markdown, editorState }) => user => {
    // TODO: This is NOT right.
    if (this._calledComponentWillUnmount) return;
    this.setState({
      user,
      nodes,
      source: markdown,
      editorState,
      originalEditorState: editorState,
    });
  };
  onLogout = () => {
    // TODO: This is NOT right.
    if (this._calledComponentWillUnmount) return;
    this.setState({
      user: null,
      nodes: [],
      originalEditorState: null,
      editorState: null,
    });
  };
  handleReset = () => {
    const { originalEditorState } = this.state;
    this.setState({ editorState: originalEditorState });
  };
  handleSave = ({ updateNode }) => () => {
    const { editorState } = this.state;
    const { node = {} } = this.props;
    const markdown = draftToMarkdown(
      convertToRaw(editorState.getCurrentContent())
    );
    this.setState({ source: markdown, originalEditorState: editorState });
    updateNode({ variables: { id: node.id, content: markdown } });
    console.log('Synced to GraphCMS');
  };
  render() {
    const {
      user,
      source,
      editorState,
      contentHasChanged,
      originalEditorState,
      nodes,
    } = this.state;
    const { node = {}, mutation } = this.props;
    if (editorState) {
      return (
        <Mutation
          mutation={mutation}
          update={(cache, { data }) => {
            const { id, content } = data[Object.keys(data)[0]];
            const newNode = { __typename: 'Node', id, content };
            cache.writeData({
              data: { nodes: _.unionBy(nodes, [newNode], 'id') },
            });
          }}
          onError={error => alert(error)}
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
                    disabled={
                      editorState.getCurrentContent() ===
                      originalEditorState.getCurrentContent()
                    }
                    onClick={this.handleReset}
                  >
                    <History />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    disabled={
                      editorState.getCurrentContent() ===
                      originalEditorState.getCurrentContent()
                    }
                    onClick={this.handleSave({ updateNode })}
                  >
                    <ContentSave />
                  </IconButton>
                </Buttons>
              </Wrapper>
            );
          }}
        </Mutation>
      );
    }
    return (
      <Typography component={Markdown} source={source} escapeHtml={false} />
    );
  }
}

export default withApollo(EditableMarkdown);
