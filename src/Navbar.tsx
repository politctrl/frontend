import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  margin: 16px;
`;

const AppNameLink = styled(Link)`
  color: #000000;
  text-decoration: none;

  :hover {
    text-decoration-line: underline;
  }
`;

const AppLogo = styled.img`
  max-height: 50px;

  :hover {
    opacity: 75%;
  }
`;

class Navbar extends Component {
  render() {
    return (
      <Nav>
        <AppNameLink to="/">
          <AppLogo src="/horizontal-black-transparent-bg.png" />
        </AppNameLink>
      </Nav>
    );
  }
}

export default Navbar;
