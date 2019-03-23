import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: ${props => props.theme.bgColor};
  border: 16px solid ${props => props.theme.bgColor};
`;

const AppLogo = styled.img`
  max-height: 50px;

  :hover {
    opacity: 75%;
  }
`;

class Navbar extends Component<any> {
  render() {
    return (
      <Nav>
        <Link to="/">
          <AppLogo src={this.props.theme.logoPath} />
        </Link>
      </Nav>
    );
  }
}

export default Navbar;
