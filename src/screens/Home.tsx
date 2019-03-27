import React, { Component } from 'react';
import { IPost } from '../models';
import { request } from '../Requests';
import PostGrid from '../PostGrid';
import Loader from '../Loaders';

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
    const { error, posts } = this.state;
    return (
      <Loader error={error} isLoading={!posts}>
        {posts && <PostGrid posts={posts} />}
      </Loader>
    );
  }

  async componentDidMount() {
    request('posts/deleted')
      .then(posts => this.setState({ posts }))
      .catch(error => this.setState({ error }));
  }
}

export default Home;
