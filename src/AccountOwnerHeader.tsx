import React from 'react';
import styled from 'styled-components';
import { StyledLink } from './Random';
import { IAccountOwner } from './models';

interface AccountOwnerHeaderProps {
  accountOwner: IAccountOwner;
}

const AccountOwnerContainer = styled.div`
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.bgColor};
  text-align: center;
  font-size: 15pt;
`;

const Avatar = styled.img`
  height: 72px;
  width: 72px;
  border-radius: 50%;
`;

const AccountOwnerName = styled.span`
  font-size: 26pt;
  font-weight: bold;
`;

const Username = styled(StyledLink)`
  font-size: 18pt;
`;

const AccountOwnerHeader = ({ accountOwner }: AccountOwnerHeaderProps) => {
  return (
    <AccountOwnerContainer>
      <Avatar src={accountOwner.photo} />
      <br />
      <AccountOwnerName>{accountOwner.displayName}</AccountOwnerName>
      <br />
      Known as: { accountOwner.accounts
        .map(a => <Username to={`/account/${a.id}`} key={`a${a.id}`}>
          @{a.displayName}
        </Username>) }
    </AccountOwnerContainer>
  );
};

export default AccountOwnerHeader;
