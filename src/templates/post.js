import React from 'react';
import Markdown from 'react-markdown';
import { Grid, Typography } from 'material-ui';
import styled from '../utils/styled';
import Section from '../components/Section';

const Article = styled(Grid, { component: 'article' })(theme => ({
  padding: '2em 0',
}));

const Placeholder = styled('div')(theme => ({
  height: 366,
  backgroundColor: '#eee',
  textAlign: 'center',
  marginBottom: '1rem',
}));
const ArticleImage = styled('img')(theme => ({
  objectFit: 'cover',
  width: '100%',
  height: 366,
}));

export default ({ data }) => {
  const post = data.posts;
  return (
    <Section>
      <Article item xs={8}>
        <Typography variant="display1">{post.title}</Typography>
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
        <Typography
          component={Markdown}
          source={post.content}
          escapeHtml={false}
        />
      </Article>
    </Section>
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
