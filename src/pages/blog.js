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
  padding: `${theme.spacing.unit * 2}px 0`,
  margin: 0,
  borderBottom: '1px solid #eee',
  listStyleType: 'none',
  '&:last-child': {
    borderBottom: 'none',
  },
}));
const PostTitle = styled(Link)(theme => ({
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    textDecoration: 'underline',
  },
}));
const Placeholder = styled('div')(theme => ({
  backgroundColor: '#eee',
  minWidth: 100,
  marginRight: theme.spacing.unit * 3,
}));
const Thumbnail = styled('img')(theme => ({
  display: 'block',
  height: '100%',
  borderRadius: 3,
}));

const IndexPage = ({ data }) => {
  return (
    <Section>
      <Grid item xs={12} sm={8}>
        <Helmet title="Blog" />
        <Typography variant="display1">Blog</Typography>
        <Typography>
          Officia e ipsum. Ut quis expetendis exquisitaque an eiusmod ubi nisi,
          ex ab ipsum enim quis, quo quamquam a ullamco. Ab aliquip
          comprehenderit, occaecat quae fugiat excepteur export.
        </Typography>
        <List>
          {data.allMarkdownRemark.edges
            .filter(edge => edge.node.frontmatter.templateKey === 'blog-post')
            .map(edge => (
              <ListItem key={edge.node.id}>
                <PostTitle to={edge.node.fields.slug}>
                  <Typography variant="title">
                    {edge.node.frontmatter.title}
                  </Typography>
                </PostTitle>
                <Typography>{edge.node.excerpt}</Typography>
              </ListItem>
            ))}
        </List>
      </Grid>
    </Section>
  );
};
export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
