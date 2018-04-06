import React from 'react';
import Link from 'gatsby-link';
import Markdown from 'react-markdown';
import Helmet from 'react-helmet';
import { Typography, Grid } from 'material-ui';
import styled from '../utils/styled';
import Section from '../components/Section';

const content = `
De commodo exquisitaque. Ut magna labore nam litteris, nulla se cupidatat de
constias elit sed laborum illustriora ut malis incurreret fidelissimae. Fabulas
et cernantur.Aliqua admodum ita quid sint. Noster cupidatat ingeniis, ad hic
labore ingeniis, quis vidisse ubi labore tempor, ita quem offendit probant. Aut
illum cillum minim consequat ea legam te iis fore consequat.
`;

const Services = ({ data }) => {
  return (
    <Section>
      <Grid item xs={12} sm={8}>
        <Helmet title="Services" />
        <Typography variant="display1">Services</Typography>
        <Typography component={Markdown} source={content} escapeHtml={false} />
      </Grid>
    </Section>
  );
};
export default Services;
