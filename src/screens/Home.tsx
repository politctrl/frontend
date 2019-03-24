import React, { Component } from 'react';
import { IPost } from '../models';
import { request } from '../Requests';
import PostGrid from '../PostGrid';

interface HomeState {
  posts: IPost[] | null;
  error: {} | null;
}

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
        <PostGrid posts={this.state.posts} />
      );
    }
    return <p>Loading...</p>;
  }

  async componentDidMount() {
    request('posts/deleted')
      .then(posts => this.setState({ posts }))
      .catch(error => this.setState({ error }));
  }
}

export default Home;
