import React from 'react';
import Link from 'gatsby-link';
import Markdown from 'react-markdown';
import Helmet from 'react-helmet';
import { Grid, Typography } from 'material-ui';
import gql from 'graphql-tag';
import styled from '../utils/styled';
import Button from '../components/Button';
import Section from '../components/Section';

const content = `
De commodo exquisitaque. Ut magna labore nam litteris, nulla se cupidatat de
constias elit sed laborum illustriora ut malis incurreret fidelissimae. Fabulas
et cernantur.Aliqua admodum ita quid sint. Noster cupidatat ingeniis, ad hic
labore ingeniis, quis vidisse ubi labore tempor, ita quem offendit probant. Aut
illum cillum minim consequat ea legam te iis fore consequat.
`;

const Home = ({ data }) => {
  return (
    <Section>
      <Grid item xs={12} sm={8}>
        <Helmet title="Home" />
        <Typography variant="display1">Home</Typography>
        <Typography component={Markdown} source={content} />
        <Button component={Link} to="/about" variant="stroked">
          About Us
        </Button>
      </Grid>
    </Section>
  );
};
export default Home;
