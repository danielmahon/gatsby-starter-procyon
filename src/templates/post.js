import React from 'react';
import Markdown from 'react-markdown';
import styled from 'styled-components';

const Placeholder = styled.div`
  height: 366px;
  background-color: #eee;
`;

export default ({ data }) => {
  const post = data.posts
  return (
    <article>
      <h1>{post.title}</h1>
      <Placeholder>
        <img
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
    </article>
  )
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
