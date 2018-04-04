import React from 'react';
import Link from 'gatsby-link';
import { Typography } from 'material-ui';
import logoImage from '../../../static/logo.png';
import { rhythm } from '../../utils/typography';
import styled from '../../utils/styled';

const FooterWrapper = styled('nav')(theme => ({
  background: theme.palette.background.default,
  borderTop: `1px solid ${theme.palette.grey[100]}`,
}));
const FooterContent = styled('div')(theme => ({
  color: 'gray',
  margin: '0 auto',
  maxWidth: 960,
  padding: '2rem',
  textAlign: 'center',
  fontSize: '0.75em',
}));
const FooterLink = styled(Link)(theme => ({
  color: 'gray',
  display: 'inline-block',
  textDecoration: 'none',
}));
const Copyright = styled(Typography)(theme => ({
  display: 'inline-block',
}));
const FooterLogo = styled('img')(theme => ({
  height: 100,
  padding: '0 1rem',
  verticalAlign: 'middle',
  [theme.breakpoints.down('sm')]: {
    display: 'block',
    margin: '1em auto',
  },
}));

const Footer = ({ data: { site } }) => (
  <FooterWrapper>
    <FooterContent>
      <Copyright variant="caption">
        &copy; 2018 {site.siteMetadata.title}
      </Copyright>
      <Link to="/">
        <FooterLogo src={logoImage} alt={site.siteMetadata.title} />
      </Link>
      <FooterLink to="/privacy-policy">
        <Typography variant="caption">Privacy Policy</Typography>
      </FooterLink>
      {` | `}
      <FooterLink to="/terms-of-service">
        <Typography variant="caption">Terms of Service</Typography>
      </FooterLink>
    </FooterContent>
  </FooterWrapper>
);

export default Footer;
