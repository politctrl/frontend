import React, { Component } from 'react';
import { IAccount } from './models';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

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

const StyledLink = styled(Link)<{ bold?: boolean }>`
  text-decoration: none;
  color: initial;

  ${props => props.bold && css`
    font-weight: bold;
  `}

  :hover, :active, :focus {
    text-decoration-line: underline;
  }
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
            {props.author.owner.displayName}
          </StyledLink>
          {' '}
          @<StyledLink to={`/account/${props.author.id}`}>
            {props.author.displayName}
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
