import React from 'react';
import { IAccount } from './models';
import { StyledLink } from './Random';
import styled from 'styled-components';
import { Twemoji } from 'react-emoji-render';

interface PostHeaderProps {
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

const PostHeader = ({ author, service }: PostHeaderProps) => {
  return (
    <span>
      <Image src={author.owner.photo} />
      <AuthorNameContainer>
        <StyledLink bold to={`/account_owner/${author.owner.id}`}>
          <Twemoji text={author.owner.displayName} />
        </StyledLink>
        {' '}
        @<StyledLink to={`/account/${author.id}`}>
          <Twemoji text={author.displayName} />
        </StyledLink>
        <ServiceLogo
          src={`${process.env.REACT_APP_DOMAIN}/services/${service}.png`}
          alt={`Originally sent on ${service}`} />
      </AuthorNameContainer>
    </span>
  );
};

export default PostHeader;
