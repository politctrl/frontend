import React, { useState } from 'react';
import qs from 'query-string';
import { Helmet } from 'react-helmet';
import { IPost } from '../models';
import { request } from '../Requests';
import PostGrid from '../PostGrid';
import Loader from '../Loaders';
import { Pagination } from '../Pagination';

interface HomeProps {
  location: {
    search: string;
  };
}

interface HomeQuerystringParsed {
  page?: number;
}

const Home = (props: HomeProps) => {
  const [posts, setPosts] = useState<IPost[] | null>(null);
  const [error, setError] = useState<any>(null);
  const { page } = qs.parse(props.location.search) as HomeQuerystringParsed;
  const [currentPage, setCurrentPage] = useState<number>(page || 0);

  const update = () => request('posts/deleted', { page: currentPage })
    .then(setPosts)
    .catch(setError);

  if (!posts && !error) {
    update();
    // on page change
  } else if ((page || 0) !== currentPage) {
    setPosts(null);
    setCurrentPage(page || 0);
    update();
  }

  return (
    <Loader error={error} isLoading={!posts}>
      {posts && <PostGrid posts={posts} />}
      <Pagination currentPage={currentPage} />
      <Helmet>
        <title>Home ꞏ PolitCtrl</title>
      </Helmet>
    </Loader>
  );
};

export default Home;
