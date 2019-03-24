import React, { Component } from 'react';
import { request } from '../Requests';
import { IAccount, IPost } from '../models';
import AccountHeader from '../AccountHeader';
import PostGrid from '../PostGrid';

interface AccountProps {
  match: {
    params: {
      id: number;
    };
  };
}

interface AccountState {
  account: IAccount | null;
  posts: IPost[] | null;
  error: any | null;
}

class Account extends Component<AccountProps, AccountState> {
  componentWillMount() {
    // makes this.state not null
    this.setState({ account: null, posts: null, error: null });
  }

  render() {
    const { error, account, posts } = this.state;
    if (error) {
      return (
        <div>
          <h3>Ooppsie wooppsie!</h3>
          <p>{error.toString()}</p>
        </div>
      );
    }
    if (account && posts) {
      return (
        <div>
          <AccountHeader account={account} />
          <PostGrid posts={posts} />
        </div>
      );
    }
    return <p>Loading...</p>;
  }

  async componentDidMount() {
    request(`account/${this.props.match.params.id}`)
      .then(account => this.setState({ account }))
      .catch(error => this.setState({ error }));
    request(`posts/account/${this.props.match.params.id}`)
      .then(posts => this.setState({ posts }))
      .catch(error => this.setState({ error }));
  }
}

export default Account;
