import React, { Component } from 'react';
import styled from 'styled-components';
import PostAuthor from './PostAuthor';
import { IPost } from './models';

interface IPostProps {
  post: IPost;
}

const PostContainer = styled.div`
  background-color: #e8e8e8;
  padding: 16px;
  border-radius: 5px;
  border: 1px #000000;
`;

class Post extends Component<IPostProps, {}> {
  render() {
    return (
      <PostContainer>
        <PostAuthor author={this.props.post.author} />
        <p>{this.props.post.content}</p>
      </PostContainer>
    );
  }
}

export default Post;
