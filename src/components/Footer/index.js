import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import logoImage from '../../../static/logo.png';
import { rhythm } from '../../utils/typography';

const FooterWrapper = styled.nav`
  background: ${({ theme }) => theme.colors.background};
  border-top: ${({ theme }) => `1px solid ${theme.colors.backgroundDarker}`};
`;
const FooterContent = styled.div`
  color: gray;
  margin: 0 auto;
  max-width: 960px;
  padding: 2rem;
  text-align: center;
  font-size: 0.75em;
`;
const FooterLink = styled(Link)`
  color: gray;
  display: inline-block;
  text-decoration: none;
`;
const FooterLogo = styled.img`
  height: 100px;
  padding: 0 1rem;
  vertical-align: middle;
  @media screen and (max-width: 960px) {
    display: block;
    margin: 1em auto;
  }
`;

const Footer = ({ data: { site } }) => (
  <FooterWrapper>
    <FooterContent>
      <FooterLink to="/">&copy; 2018 {site.siteMetadata.title}</FooterLink>
      <FooterLogo src={logoImage} alt={site.siteMetadata.title} />
      <FooterLink to="/">Privacy Policy</FooterLink>
      {` | `}
      <FooterLink to="/">Terms of Service</FooterLink>
    </FooterContent>
  </FooterWrapper>
);

export default Footer;
