import React, { Component } from 'react';
import Link from 'gatsby-link';
import Markdown from 'react-markdown';
import Helmet from 'react-helmet';
import netlifyIdentity from 'netlify-identity-widget';
import styled from '../utils/styled';

const Section = styled('section')(theme => ({
  padding: '2rem 1rem',
}));
const Content = styled('div')(theme => ({
  maxWidth: 720,
  margin: '0 auto',
}));

const content = `
De commodo exquisitaque. Ut magna labore nam litteris, nulla se cupidatat de
constias elit sed laborum illustriora ut malis incurreret fidelissimae. Fabulas
et cernantur.Aliqua admodum ita quid sint. Noster cupidatat ingeniis, ad hic
labore ingeniis, quis vidisse ubi labore tempor, ita quem offendit probant. Aut
illum cillum minim consequat ea legam te iis fore consequat.
`;

class Admin extends Component {
  handleLogin = () => {
    netlifyIdentity.open();
  };
  render() {
    return (
      <Section>
        <Content>
          <Helmet title="Admin" />
          <h1>Admin</h1>
          <button onClick={this.handleLogin}>Login</button>
          <Markdown source={content} escapeHtml={false} />
        </Content>
      </Section>
    );
  }
}

export default Admin;
