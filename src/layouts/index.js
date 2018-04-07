import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import netlifyIdentity from 'netlify-identity-widget';
import { Grid } from 'material-ui';
import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { withClientState } from 'apollo-link-state';
import { ApolloProvider } from 'react-apollo';
import 'medium-draft/lib/index.css';
// Import Google Fonts
import 'typeface-merriweather';
import 'typeface-open-sans';
// Global styles
import './index.css';
// Relative imports
import withRoot from '../utils/withRoot';
import styled from '../utils/styled';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { loginUser, logoutUser } from '../utils/identityActions';

// Create Apollo Client
const httpLink = createHttpLink({
  uri: process.env.GATSBY_GRAPHQLCMS_ENDPOINT,
});
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const user = netlifyIdentity.currentUser();
  const token = process.env.GATSBY_GRAPHQLCMS_TOKEN;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: user ? `Bearer ${token}` : '',
    },
  };
});
const defaults = {
  nodes: [],
};
const cache = new InMemoryCache();
const stateLink = withClientState({ cache, defaults });
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

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
      <ApolloProvider client={client}>
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
      </ApolloProvider>
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
