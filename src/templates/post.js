import React from 'react';
import Markdown from 'react-markdown';
import styled from '../utils/styled';

const Article = styled('article')(theme => ({
  padding: '2em 0',
  margin: '0 auto',
  maxWidth: 720,
}));

const Placeholder = styled('div')(theme => ({
  height: 366,
  backgroundColor: '#eee',
  textAlign: 'center',
  marginBottom: '2rem',
}));
const ArticleImage = styled('img')(theme => ({
  objectFit: 'cover',
  width: '100%',
  height: 366,
}));

export default ({ data }) => {
  const post = data.posts;
  return (
    <Article>
      <h1>{post.title}</h1>
      <Placeholder>
        <ArticleImage
          alt={post.title}
          src={
            post.coverImage
              ? `https://media.graphcms.com/resize=w:650,h:366,fit:crop/${
                  post.coverImage.handle
                }`
              : 'https://via.placeholder.com/650x366'
          }
        />
      </Placeholder>
      <Markdown source={post.content} escapeHtml={false} />
    </Article>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    posts(slug: { eq: $slug }) {
      id
      slug
      title
      coverImage {
        handle
      }
      content
    }
  }
`;
