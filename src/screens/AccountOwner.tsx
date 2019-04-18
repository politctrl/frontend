import React, { useState } from 'react';
import qs from 'query-string';
import { Helmet } from 'react-helmet';
import { request } from '../Requests';
import { IAccountOwner, IPost } from '../models';
import AccountOwnerHeader from '../AccountOwnerHeader';
import PostGrid from '../PostGrid';
import Loader from '../Loaders';
import { Pagination } from '../Pagination';

interface AccountOwnerProps {
  match: {
    params: {
      id: number;
    };
  };
  location: {
    search: string;
  };
}

interface AccountOwnerQuerystringParsed {
  page?: number;
}

const AccountOwner = ({ match }: AccountOwnerProps) => {
  const [accountOwner, setAccountOwner] = useState<IAccountOwner | null>(null);
  const [posts, setPosts] = useState<IPost[] | null>(null);
  const [error, setError] = useState<any>(null);
  const { page } = qs.parse(location.search) as AccountOwnerQuerystringParsed;
  const [currentPage, setCurrentPage] = useState<number>(page || 0);

  const update = () => {
    if (!accountOwner) {
      request(`account_owner/${match.params.id}`)
        .then(setAccountOwner)
        .catch(setError);
    }
    request(`posts/account_owner/${match.params.id}`, { page: currentPage })
      .then(setPosts)
      .catch(setError);
  };

  if (!posts && !accountOwner && !error) {
    update();
    // if page number changed
  } else if ((page || 0) !== currentPage) {
    setPosts(null);
    setCurrentPage(page || 0);
    update();
  }

  return (
    <Loader error={error} isLoading={!accountOwner && !posts}>
      <div>
        {accountOwner && <AccountOwnerHeader accountOwner={accountOwner} />}
        {posts && <PostGrid posts={posts} />}
        <Pagination currentPage={currentPage} />
        <Helmet>
          <title>{ accountOwner && `${accountOwner.displayName} on ` }PolitCtrl</title>
        </Helmet>
      </div>
    </Loader>
  );
};

export default AccountOwner;
