import React, { Component } from 'react';
import styled from 'styled-components';
import { StyledLink } from './Random';
import { IAccount } from './models';

interface AccountHeaderProps {
  account: IAccount;
}

const AccountContainer = styled.div`
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

const AccountOwnerLink = styled(StyledLink)`
  font-size: 26pt;
`;

const Username = styled.span`
  font-size: 20pt;
`;

class AccountHeader extends Component<AccountHeaderProps> {
  render() {
    const { account } = this.props;
    return (
      <AccountContainer>
        <Avatar src={account.owner.photo} />
        <br />
        <span>
          <AccountOwnerLink bold to={`/account_owner/${account.owner.id}`}>
            {account.owner.displayName}
          </AccountOwnerLink>
        </span>
        <br />
        <Username>
          @{account.displayName}
        </Username>
      </AccountContainer>
    );
  }
}

export default AccountHeader;
