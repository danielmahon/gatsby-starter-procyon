import React from 'react';
import Link from 'gatsby-link';
import { Grid, Button } from 'material-ui';
import logoImage from '../../../static/logo.png';
import styled from '../../utils/styled';

const HeaderWrapper = styled(Grid, {
  component: 'header',
  container: true,
  spacing: 16,
})(theme => ({
  background: theme.palette.background.default,
  borderBottom: theme.palette.grey[50],
}));
const HeaderContent = styled(Grid)(theme => ({
  textAlign: 'center',
}));
const Navigation = styled('nav')(theme => ({
  padding: '1rem 0',
}));
const Title = styled('h1')(theme => ({
  padding: '2rem 0 0',
  margin: 0,
}));
const Logo = styled('img')(theme => ({
  height: 196,
}));
const NavLink = styled(Button, { component: Link })(theme => ({
  color: 'gray',
}));

const Header = ({ data: { site } }) => (
  <HeaderWrapper>
    <HeaderContent item xs={12}>
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
