import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Markdown from 'react-markdown';
import Helmet from 'react-helmet';

const Section = styled.section`
  padding: 2rem 1rem;
`;
const Content = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;

const content = `
De commodo exquisitaque. Ut magna labore nam litteris, nulla se cupidatat de
constias elit sed laborum illustriora ut malis incurreret fidelissimae. Fabulas
et cernantur.Aliqua admodum ita quid sint. Noster cupidatat ingeniis, ad hic
labore ingeniis, quis vidisse ubi labore tempor, ita quem offendit probant. Aut
illum cillum minim consequat ea legam te iis fore consequat.
`;

const About = ({ data }) => {
  return (
    <Section>
      <Content>
        <Helmet title="About" />
        <h1>About</h1>
        <Markdown source={content} escapeHtml={false} />
      </Content>
    </Section>
  );
};
export default About;
