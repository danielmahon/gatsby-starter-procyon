import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from '../utils/styled';
import { Typography, Grid } from 'material-ui';
import Section from '../components/Section';

const List = styled('ul')(theme => ({
  padding: 0,
  margin: 0,
}));
const ListItem = styled('li')(theme => ({
  display: 'flex',
  alignItems: 'center',
  padding: '1rem 0',
  margin: 0,
  borderBottom: '1px solid #eee',
  overflow: 'hidden',
  '&:last-child': {
    borderBottom: 'none',
  },
}));
const ListLink = styled(Link)(theme => ({
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    textDecoration: 'underline',
  },
}));
const Placeholder = styled('div')(theme => ({
  backgroundColor: '#eee',
  minWidth: 100,
  marginRight: 24,
}));
const Thumbnail = styled('img')(theme => ({
  display: 'block',
  height: '100%',
  borderRadius: 3,
}));

const IndexPage = ({ data }) => {
  return (
    <Section>
      <Grid item xs={8}>
        <Helmet title="Blog" />
        <Typography variant="display1">Blog</Typography>
        <Typography>
          <p>
            Officia e ipsum. Ut quis expetendis exquisitaque an eiusmod ubi
            nisi, ex ab ipsum enim quis, quo quamquam a ullamco. Ab aliquip
            comprehenderit, occaecat quae fugiat excepteur export.
          </p>
        </Typography>
        <List>
          {data.allPosts.edges.map(post => (
            <ListItem key={post.node.id}>
              <Link to={`/post/${post.node.slug}`}>
                <Placeholder>
                  <Thumbnail
                    alt={post.node.title}
                    src={
                      post.node.coverImage
                        ? `https://media.graphcms.com/resize=w:100,h:100,fit:crop/${
                            post.node.coverImage.handle
                          }`
                        : 'https://via.placeholder.com/100x100'
                    }
                  />
                </Placeholder>
              </Link>
              <ListLink to={`/post/${post.node.slug}`}>
                <Typography variant="title">{post.node.title}</Typography>
              </ListLink>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Section>
  );
};
export default IndexPage;

export const allPostsQuery = graphql`
  query allPosts {
    allPosts(sort: { fields: [dateAndTime], order: DESC }) {
      edges {
        node {
          id
          title
          slug
          coverImage {
            handle
          }
        }
      }
    }
  }
`;
