import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledLink } from './Random';

const Nav = styled.nav`
  background-color: ${props => props.theme.bgColor};
  border: 16px solid ${props => props.theme.bgColor};
`;

const AppLogo = styled.img`
  max-height: 50px;
  padding: 12px;
  padding-bottom: 4px;

  :hover {
    opacity: 75%;
  }
`;

const NavLink = styled(StyledLink)`
  font-size: 16pt;
  margin: 12px;
`;

const Navbar = ({ theme }: any) => {
  return (
    <Nav>
      <Link to="/">
        <AppLogo src={theme.logoPath} />
      </Link>
      <NavLink to="/contact">Contact</NavLink>
    </Nav>
  );
};

export default Navbar;
