import React from 'react';
import Link from 'gatsby-link';
import { Button } from 'material-ui';
import logoImage from '../../../static/logo.png';
import styled from '../../utils/styled';

const HeaderWrapper = styled('header')(theme => ({
  background: theme.palette.background.default,
  borderBottom: theme.palette.grey[50],
}));
const HeaderContent = styled('div')(theme => ({
  margin: '0 auto',
  maxWidth: 960,
  textAlign: 'center',
}));
const Navigation = styled('nav')(theme => ({
  padding: '1rem 0',
}));
const Title = styled('h1')(theme => ({
  padding: '2rem',
  margin: 0,
}));
const Logo = styled('img')(theme => ({
  height: 256,
}));
const NavLink = styled(Button, { component: Link })(theme => ({
  color: 'gray',
  // fontSize: '0.875em',
  // fontWeight: 300,
  // display: 'inline-block',
  // textDecoration: 'none',
  // padding: '0.5rem 0.75rem',
  // fontFamily: 'Merriweather',
  // '&:hover': {
  //   backgroundColor: theme.palette.grey[50],
  // },
}));

const Header = ({ data: { site } }) => (
  <HeaderWrapper>
    <HeaderContent>
      <Title>
        <Link to="/">
          <Logo src={logoImage} alt={site.siteMetadata.title} />
        </Link>
      </Title>
      <Navigation>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Navigation>
    </HeaderContent>
  </HeaderWrapper>
);

export default Header;
