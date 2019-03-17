import React, { Component } from 'react';
import { IAccount } from './models';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface IPostAuthorProps {
  author: IAccount;
}

const Image = styled.img`
  height: 24px;
  border-radius: 50%;
`;

const AuthorNameContainer = styled.span`
  padding-left: 8px;
  vertical-align: super;
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: initial;
`;

class PostAuthor extends Component<IPostAuthorProps> {
  render() {
    const props = this.props;
    return (
      <span>
        <Image src="https://pbs.twimg.com/profile_images/590508740010348544/eS1F7mN5_normal.png" />
        <AuthorNameContainer>
          <b>{props.author.owner.displayName}</b>
          {' '}
          @<StyledLink to={`/account/${props.author.id}`}>{props.author.displayName}</StyledLink>
        </AuthorNameContainer>
      </span>
    );
  }
}

export default PostAuthor;
