import React, { Component } from 'react';
import { formatDistance, format } from 'date-fns';
import styled from 'styled-components';
import { IPost } from './models';

interface IPostFooter {
  post: IPost;
}

const Footer = styled.span`
  color: rgba(0, 0, 0, 50%);
  font-size: 85%;
`;

class PostFooter extends Component<IPostFooter> {
  render() {
    const post = this.props.post;
    if (!post.deleteTimestamp) return;
    return (
      <Footer>Deleted {formatDistance(
        parseInt(post.deleteTimestamp, 10),
        parseInt(post.createTimestamp, 10),
        { addSuffix: true },
      )} ꞏ Posted on {format(
        parseInt(post.createTimestamp, 10),
        'yyyy-MM-dd HH:mm:ss',
      )}
      </Footer>
    );
  }
}

export default PostFooter;
