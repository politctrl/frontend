import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import { Home, Account, AccountOwner, Contact, PostScreen } from './screens';

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
  font-family: Lato, Roboto, Arial, 'Noto Sans', sans-serif;
`;

class App extends Component<any> {
  render() {
    return (
      <Router>
        <Container>
          <Navbar theme={this.props.theme} />

          <Route exact path="/" component={Home} />
          <Route path="/account/:id" component={Account} />
          <Route path="/account_owner/:id" component={AccountOwner} />
          <Route path="/post/:id" component={PostScreen} />
          <Route path="/contact" component={Contact} />
        </Container>
      </Router>
    );
  }
}

export default App;
