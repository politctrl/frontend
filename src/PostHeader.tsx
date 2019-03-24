import React, { Component } from 'react';
import { IAccount } from './models';
import { StyledLink } from './Random';
import styled from 'styled-components';
import { Twemoji } from 'react-emoji-render';

interface IPostAuthorProps {
  author: IAccount;
  service: string;
}

const Image = styled.img`
  height: 24px;
  width: 24px;
  border-radius: 50%;
`;

const AuthorNameContainer = styled.span`
  padding-left: 8px;
  vertical-align: super;
`;

const ServiceLogo = styled.img`
  margin-left: 4px;
  vertical-align: top;
  height: 24px;
`;

class PostHeader extends Component<IPostAuthorProps> {
  render() {
    const props = this.props;
    return (
      <span>
        <Image src={props.author.owner.photo} />
        <AuthorNameContainer>
          <StyledLink bold to={`/person/${props.author.owner.id}`}>
            <Twemoji text={props.author.owner.displayName} />
          </StyledLink>
          {' '}
          @<StyledLink to={`/account/${props.author.id}`}>
            <Twemoji text={props.author.displayName} />
          </StyledLink>
          <ServiceLogo
            src={`${process.env.REACT_APP_DOMAIN}/services/${props.service}.png`}
            alt={`Originally sent on ${props.service}`} />
        </AuthorNameContainer>
      </span>
    );
  }
}

export default PostHeader;
