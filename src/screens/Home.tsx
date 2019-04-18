import React, { useState } from 'react';
import qs from 'query-string';
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
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);
  const { page } = qs.parse(props.location.search) as HomeQuerystringParsed;
  const [currentPage, setCurrentPage] = useState(page || 0);

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
    </Loader>
  );
};

export default Home;
