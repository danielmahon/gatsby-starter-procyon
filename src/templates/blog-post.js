import React, { Component } from 'react';
import Link from 'gatsby-link';
import { Grid, Typography, IconButton } from 'material-ui';
import ArrowLeft from 'mdi-material-ui/ArrowLeft';
import styled from '../utils/styled';
import Section from '../components/Section';
import Content from '../components/Content';

const Article = styled(Grid, { component: 'article' })(theme => ({
  padding: `${theme.spacing.unit * 2}px 0`,
}));

const Placeholder = styled('div')(theme => ({
  height: 366,
  backgroundColor: '#eee',
  textAlign: 'center',
  margin: `${theme.spacing.unit * 2}px 0`,
}));
const ArticleImage = styled('img')(theme => ({
  objectFit: 'cover',
  width: '100%',
  height: 366,
}));
const ArticleTitle = styled('div')(theme => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

class BlogPost extends Component {
  render() {
    const { data: { markdownRemark: page }, preview } = this.props;
    return (
      <Section>
        <Article item xs={12} sm={8}>
          <ArticleTitle>
            <Typography variant="display1">{page.frontmatter.title}</Typography>
            <IconButton component={preview ? null : Link} to="/blog">
              <ArrowLeft />
            </IconButton>
          </ArticleTitle>
          <Content content={page.html} />
        </Article>
      </Section>
    );
  }
}

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
