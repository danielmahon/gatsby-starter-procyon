import React from 'react';
import Link from 'gatsby-link';
import { Grid, Typography } from 'material-ui';
import logoImage from '../../../static/logo.png';
import { rhythm } from '../../utils/typography';
import styled from '../../utils/styled';

const FooterWrapper = styled(Grid, {
  component: 'footer',
  container: true,
  spacing: 16,
  fontSize: '0.75em',
})(theme => ({
  background: theme.palette.background.default,
  borderTop: `1px solid ${theme.palette.grey[100]}`,
}));
const Left = styled(Grid)(theme => ({
  textAlign: 'right',
}));
const Middle = styled(Grid)(theme => ({
  textAlign: 'center',
}));
const Right = styled(Grid)(theme => ({
  textAlign: 'left',
}));
const FooterLink = styled(Link)(theme => ({
  color: 'gray',
  display: 'inline-block',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));
const Copyright = styled(Typography)(theme => ({
  display: 'block',
  lineHeight: '80px',
}));
const FooterLogo = styled('img')(theme => ({
  height: 80,
  padding: '0 1rem',
  verticalAlign: 'middle',
  [theme.breakpoints.down('sm')]: {
    display: 'block',
    margin: '1em auto',
  },
}));

const Footer = ({ data: { site } }) => (
  <FooterWrapper>
    <Left item xs={5}>
      <Copyright variant="caption">
        &copy; 2018 {site.siteMetadata.title}
        {` | `}
        <FooterLink to="/admin">Admin</FooterLink>
      </Copyright>
    </Left>
    <Middle item xs={2}>
      <Link to="/">
        <FooterLogo src={logoImage} alt={site.siteMetadata.title} />
      </Link>
    </Middle>
    <Right item xs={5}>
      <Copyright variant="caption">
        <FooterLink to="/privacy-policy">
          <Typography variant="caption">Privacy Policy</Typography>
        </FooterLink>
        {` | `}
        <FooterLink to="/terms-of-service">
          <Typography variant="caption">Terms of Service</Typography>
        </FooterLink>
      </Copyright>
    </Right>
  </FooterWrapper>
);

export default Footer;
