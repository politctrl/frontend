import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Post from '../Post';
import { request } from '../Requests';
import Loader from '../Loaders';
import { IPost } from '../models';

const PostContainer = styled.div`
  padding: 16px;
`;

interface PostScreenProps {
  match: {
    params: {
      id: number;
    };
  };
}

const PostScreen = ({ match }: PostScreenProps) => {
  const [post, setPost] = useState<IPost | null>(null);
  const [error, setError] = useState<any>(null);

  const update = () => request(`post/id/${match.params.id}`)
    .then(setPost)
    .catch(setError);

  if (!post && !error) {
    update();
  }

  return (
    <Loader error={error} isLoading={!post}>
      <PostContainer>
        { post && <Post post={post}/> }
      </PostContainer>
      <Helmet>
        <title>{ post && `${post.author.owner.displayName} as @${post.author.displayName} on ${post.author.service}:`
        + ` ${post.content.length > 50 ? post.content.substring(0, 50) + '…' : post.content}`
        + ' ꞏ PolitCtrl' }</title>
      </Helmet>
    </Loader>
  );
};

export default PostScreen;
