import React, { useState } from 'react';
import qs from 'query-string';
import { Helmet } from 'react-helmet';
import { request } from '../Requests';
import { IAccount, IPost } from '../models';
import AccountHeader from '../AccountHeader';
import PostGrid from '../PostGrid';
import Loader from '../Loaders';
import { Pagination } from '../Pagination';

interface AccountProps {
  match: {
    params: {
      id: number;
    };
  };
  location: {
    search: string;
  };
}

interface AccountQuerystringParsed {
  page?: number;
}

const Account = ({ match, location }: AccountProps) => {
  const [account, setAccount] = useState<IAccount | null>(null);
  const [posts, setPosts] = useState<IPost[] | null>(null);
  const [error, setError] = useState<any>(null);
  const { page } = qs.parse(location.search) as AccountQuerystringParsed;
  const [currentPage, setCurrentPage] = useState<number>(page || 0);

  const update = () => {
    // account info doesn't update with page change ;)
    if (!account) {
      request(`account/${match.params.id}`)
        .then(setAccount)
        .catch(setError);
    }
    request(`posts/account/${match.params.id}`, { page: currentPage })
      .then(setPosts)
      .catch(setError);
  };

  if (!posts && !account && !error) {
    update();
    // if page number changed
  } else if ((page || 0) !== currentPage) {
    setPosts(null);
    setCurrentPage(page || 0);
    update();
  }

  return (
    <Loader error={error} isLoading={!account && !posts}>
      { account && <AccountHeader account={account} /> }
      { posts && <PostGrid posts={posts} /> }
      <Pagination currentPage={currentPage} />
      <Helmet>
        <title>{ account && `@${account.displayName} on ${account.service} ꞏ ` }PolitCtrl</title>
      </Helmet>
    </Loader>
  );
};

export default Account;
