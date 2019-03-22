import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import Home from './Home';

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
  font-family: Lato, Roboto, Arial, 'Noto Sans', sans-serif;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Navbar />

          <Route exact path="/" component={Home} />
        </Container>
      </Router>
    );
  }
}

export default App;
