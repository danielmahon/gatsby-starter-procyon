import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
  padding: 2rem 0;
`;

const NotFoundPage = () => (
  <Main>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Main>
);

export default NotFoundPage;
