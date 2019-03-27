import React, { Component } from 'react';
import { request } from '../Requests';
import { IAccountOwner, IPost } from '../models';
import AccountOwnerHeader from '../AccountOwnerHeader';
import PostGrid from '../PostGrid';
import Loader from '../Loaders';

interface AccountOwnerProps {
  match: {
    params: {
      id: number;
    };
  };
}

interface AccountOwnerState {
  accountOwner: IAccountOwner | null;
  posts: IPost[] | null;
  error: any | null;
}

class AccountOwner extends Component<AccountOwnerProps, AccountOwnerState> {
  componentWillMount() {
    // makes this.state not null
    this.setState({ accountOwner: null, posts: null, error: null });
  }

  render() {
    const { error, accountOwner, posts } = this.state;
    return (
      <Loader error={error} isLoading={!accountOwner && !posts}>
        <div>
          {accountOwner && <AccountOwnerHeader accountOwner={accountOwner} />}
          {posts && <PostGrid posts={posts} />}
        </div>
      </Loader>
    );
  }

  async componentDidMount() {
    request(`account_owner/${this.props.match.params.id}`)
      .then(accountOwner => this.setState({ accountOwner }))
      .catch(error => this.setState({ error }));
    request(`posts/account_owner/${this.props.match.params.id}`)
      .then(posts => this.setState({ posts }))
      .catch(error => this.setState({ error }));
  }
}

export default AccountOwner;
