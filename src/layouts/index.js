import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import netlifyIdentity from 'netlify-identity-widget';
import { Grid } from 'material-ui';
// Import Google Fonts
import 'typeface-open-sans';
import 'typeface-merriweather';
// Global styles
import './index.css';
// Relative imports
import withRoot from '../utils/withRoot';
import styled from '../utils/styled';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { loginUser, logoutUser } from '../utils/identityActions';

const Main = styled('main')(theme => ({
  backgroundColor: 'white',
  borderBottom: `1px solid ${theme.palette.grey[200]}`,
  borderTop: `1px solid ${theme.palette.grey[200]}`,
  margin: `0 -${theme.spacing.unit * 2}px`,
  padding: `0 ${theme.spacing.unit * 2}px`,
}));
const Wrapper = styled('div')(theme => ({
  padding: `0 ${theme.spacing.unit * 2}px`,
}));

class App extends Component {
  constructor(props) {
    super(props);
    // Initialize NetlifyIdentity
    typeof window !== 'undefined' && netlifyIdentity.init();
  }
  render() {
    const { children, data: { site } } = this.props;
    return (
      <Wrapper>
        <Helmet
          title={site.siteMetadata.title}
          meta={[
            { name: 'description', content: site.siteMetadata.description },
          ]}
        />
        <Header data={{ site }} />
        <Main>{children()}</Main>
        <Footer data={{ site }} />
      </Wrapper>
    );
  }
}
App.propTypes = {
  children: PropTypes.func,
};
export default withRoot(App);

export const query = graphql`
  query GetSiteMetadata {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
