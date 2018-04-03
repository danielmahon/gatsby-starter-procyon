import React from 'react';
import Markdown from 'react-markdown';
import styled from 'styled-components';

const Article = styled.article`
  padding: 2em 0;
  margin: 0 auto;
  max-width: 720px;
`;

const Placeholder = styled.div`
  height: 366px;
  background-color: #eee;
  text-align: center;
  margin-bottom: 2rem;
`;
const ArticleImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 366px;
`;

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
