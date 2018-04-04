import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import netlifyIdentity from 'netlify-identity-widget';
import { Grid } from 'material-ui';
// Import Google Fonts
import 'typeface-roboto';
import 'typeface-open-sans';
import 'typeface-merriweather';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { loginUser, logoutUser } from '../utils/identityActions';
import withRoot from '../utils/withRoot';
import styled from '../utils/styled';

import './index.css';

netlifyIdentity.init();

const Main = styled('main')(theme => ({
  backgroundColor: 'white',
  padding: 16,
}));

class App extends Component {
  state = { user: null };
  componentDidMount() {
    const user = localStorage.getItem('currentUser');
    if (user) {
      this.setState({ user: JSON.parse(user) });
    } else {
      loginUser();
    }
    netlifyIdentity.on('login', user => this.setState({ user }, loginUser()));
    netlifyIdentity.on('logout', user =>
      this.setState({ user: null }, logoutUser())
    );
  }
  render() {
    const { children, data: { site } } = this.props;
    return (
      <div>
        <Helmet
          title={site.siteMetadata.title}
          meta={[
            { name: 'description', content: site.siteMetadata.description },
          ]}
        />
        <Header data={{ site }} />
        <Main>{children()}</Main>
        <Footer data={{ site }} />
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.func,
};
export default withRoot(App);

export const query = graphql`
  query siteMetadata {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
