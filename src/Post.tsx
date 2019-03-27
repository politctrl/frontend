import React from 'react';
import styled from 'styled-components';
import { Twemoji } from 'react-emoji-render';
import PostHeader from './PostHeader';
import { IPost } from './models';
import PostFooter from './PostFooter';
import PostEmbedThumbnail from './PostEmbedThumbnail';

interface IPostProps {
  post: IPost;
}

const PostContainer = styled.div`
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.bgColor};
  padding: 16px;
  border-radius: 5px;
  border: 1px solid hsla(0, 0%, 50%, 0.4);
  overflow-wrap: break-word;
  box-shadow: -6px 6px 12px 0px hsla(0, 0%, 50%, 0.05);
`;

const Blockquote = styled.blockquote`
  margin: 0 16px;
`;

const Post = ({ post }: IPostProps) => {
  return (
    <PostContainer>
      <PostHeader author={post.author} service={post.service} />
      <Blockquote>
        <p><Twemoji text={post.content} /></p>
      </Blockquote>
      { post.embeds.map(e => <PostEmbedThumbnail embed={e} />) }
      <PostFooter post={post} />
    </PostContainer>
  );
};

export default Post;
