import React from 'react';
import styled from '../utils/styled';

const Main = styled('div')(theme => ({
  padding: '2rem 1rem',
}));

const NotFoundPage = () => (
  <Main>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Main>
);

export default NotFoundPage;
