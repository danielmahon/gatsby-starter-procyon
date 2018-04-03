import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
// This must appear BEFORE all other component imports (ie: Header) so
// that css is injected to top of global scope
import theme from './theme.js';
// Import Header AFTER global theme
import Header from '../components/Header';
import Footer from '../components/Footer';

const Main = styled.main`
  margin: 0 auto;
  max-width: 960px;
`;

const TemplateWrapper = ({ children, data: { site } }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        title={site.siteMetadata.title}
        meta={[{ name: 'description', content: site.siteMetadata.description }]}
      />
      <Header data={{ site }} />
      <Main>{children()}</Main>
      <Footer data={{ site }} />
    </div>
  </ThemeProvider>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;

export const query = graphql`
  query siteMetadata {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
