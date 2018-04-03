import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import logoImage from '../../../static/logo.png';

const HeaderWrapper = styled.nav`
  background: ${({ theme }) => theme.colors.background};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.backgroundDarker}`};
`;
const HeaderContent = styled.div`
  margin: 0 auto;
  max-width: 960px;
  text-align: center;
`;
const Navigation = styled.div`
  padding: 1rem 0;
`;
const Title = styled.h1`
  padding: 2rem;
  margin: 0;
`;
const Logo = styled.img`
  height: 256px;
`;
const TitleLink = styled(Link)`
  color: gray;
  font-size: 0.875em;
  font-weight: 300;
  display: inline-block;
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  font-family: 'Merriweather';
  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundDarker};
  }
`;

const Header = ({ data: { site } }) => (
  <HeaderWrapper>
    <HeaderContent>
      <Title>
        <Link to="/">
          <Logo src={logoImage} alt={site.siteMetadata.title} />
        </Link>
      </Title>
      <Navigation>
        <TitleLink to="/">Home</TitleLink>
        <TitleLink to="/services">Services</TitleLink>
        <TitleLink to="/about">About</TitleLink>
        <TitleLink to="/blog">Blog</TitleLink>
        <TitleLink to="/contact">Contact</TitleLink>
      </Navigation>
    </HeaderContent>
  </HeaderWrapper>
);

export default Header;
