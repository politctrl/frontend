import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AppNameLink = styled(Link)`
  color: #000000;
  text-decoration: none;

  :hover {
    text-decoration-line: underline;
  }
`;

class Navbar extends Component {
  render() {
    return (
      <nav>
        <AppNameLink to="/">
          <h1>PolitCtrl</h1>
        </AppNameLink>
      </nav>
    );
  }
}

export default Navbar;
