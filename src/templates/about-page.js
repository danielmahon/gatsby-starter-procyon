import React from 'react';
import Link from 'gatsby-link';
import Markdown from 'react-markdown';
import Helmet from 'react-helmet';
import { Typography, Grid } from 'material-ui';
import styled from '../utils/styled';
import Section from '../components/Section';

const About = ({ data }) => {
  const { markdownRemark: page } = data;
  return (
    <Section>
      <Grid item xs={12} sm={8}>
        <Helmet title={page.frontmatter.title} />
        <Typography variant="display1">{page.frontmatter.title}</Typography>
        <Typography dangerouslySetInnerHTML={{ __html: page.html }} />
      </Grid>
    </Section>
  );
};
export default About;

export const query = graphql`
  query GetAboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
