import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import Home from './Home';

const Container = styled.div`
  font-family: Lato, Roboto, 'Noto Sans';
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
