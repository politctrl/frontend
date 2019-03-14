import React, { Component } from 'react';
import { IAccount } from './models';
import { Link } from 'react-router-dom';

interface IPostAuthorProps {
  author: IAccount;
}

class PostAuthor extends Component<IPostAuthorProps> {
  render() {
    return (
      <span>
        <img src="https://pbs.twimg.com/profile_images/590508740010348544/eS1F7mN5_normal.png" />
        <b>{this.props.author.owner.displayName}</b>
        {' '}
        @<Link to={`/account/${this.props.author.id}`}>{this.props.author.displayName}</Link>
      </span>
    );
  }
}

export default PostAuthor;
