import React from 'react';
import Link from 'gatsby-link';
import Markdown from 'react-markdown';
import Helmet from 'react-helmet';
import { Grid, Typography } from 'material-ui';
import gql from 'graphql-tag';

import styled from '../utils/styled';
import Button from '../components/Button';
import Section from '../components/Section';
import EditableMarkdown from '../components/EditableMarkdown';

const UPDATE_SECTION = gql`
  mutation($id: ID!, $content: String!) {
    updateSection(id: $id, content: $content) {
      id
      content
    }
  }
`;

const Home = ({ data }) => {
  const node = data.allPages.edges[0].node.sections[0];
  return (
    <Section>
      <Grid item xs={12} sm={8}>
        <Helmet title="Home" />
        <Typography variant="display1">Home</Typography>
        <EditableMarkdown
          node={node}
          source={node.content}
          mutation={UPDATE_SECTION}
        />
        <Button component={Link} to="/about" variant="stroked">
          About Us
        </Button>
      </Grid>
    </Section>
  );
};
export default Home;

export const query = graphql`
  query PageQuery {
    allPages(filter: { slug: { eq: "home" } }) {
      edges {
        node {
          id
          slug
          sections {
            id
            content
          }
        }
      }
    }
  }
`;
