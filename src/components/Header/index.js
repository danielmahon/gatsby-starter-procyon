import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`;
const HeaderContent = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;
const Title = styled.h1`
  margin: 0;
`;
const TitleLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Header = ({ data: { site } }) => (
  <Wrapper>
    <HeaderContent>
      <Title>
        <TitleLink to="/">{site.siteMetadata.title}</TitleLink>
      </Title>
    </HeaderContent>
  </Wrapper>
);

export default Header;
