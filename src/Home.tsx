import React, { Component } from 'react';
import { Grid, Cell } from 'styled-css-grid';
import Post from './Post';
import { IPost } from './models';
import styled from 'styled-components';

interface HomeState {
  posts: IPost[] | null;
  error: {} | null;
}

const HomeContainer = styled.div`
  background-color: ${props => props.theme.bgColor};
  padding: 16px;
`;

class Home extends Component<{}, HomeState> {
  componentWillMount() {
    // makes this.state not null
    this.setState({ posts: null, error: null });
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h3>Ooppsie wooppsie!</h3>
          <p>{this.state.error.toString()}</p>
        </div>
      );
    }
    if (this.state.posts) {
      return (
        <HomeContainer>
          <Grid flow="dense"
            columns="repeat(auto-fit,minmax(360px,1fr))"
            gap="26px"
            alignContent="space-around">
            { this.state.posts.map(post =>
              <Cell key={post.id}><Post post={post} /></Cell>) }
          </Grid>
        </HomeContainer>
      );
    }
    return <p>Loading...</p>;
  }

  async componentDidMount() {
    fetch(`${process.env.REACT_APP_API_SERVER}/v1/posts/deleted`)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error('Not 200 returned by server');
        }
        return res.json();
      })
      .then(posts => this.setState({ posts }))
      .catch(error => this.setState({ error }));
  }
}

export default Home;
