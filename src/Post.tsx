import React, { Component } from 'react';
import styled from 'styled-components';
import PostHeader from './PostHeader';
import { IPost } from './models';
import PostFooter from './PostFooter';
import PostEmbedThumbnail from './PostEmbedThumbnail';

interface IPostProps {
  post: IPost;
}

const PostContainer = styled.div`
  // background-color: #e8e8e8;
  padding: 16px;
  border-radius: 5px;
  border: 1px solid hsla(0, 0%, 50%, 0.4);
  overflow-wrap: break-word;
  box-shadow: -6px 6px 12px 0px hsla(0, 0%, 50%, 0.05);
`;

const Blockquote = styled.blockquote`
  margin: 0 16px;
`;

class Post extends Component<IPostProps, {}> {
  render() {
    return (
      <PostContainer>
        <PostHeader author={this.props.post.author} service={this.props.post.service} />
        <Blockquote>
          <p>{this.props.post.content}</p>
        </Blockquote>
        { this.props.post.embeds.map(e => <PostEmbedThumbnail embed={e} />) }
        <PostFooter post={this.props.post} />
      </PostContainer>
    );
  }
}

export default Post;
