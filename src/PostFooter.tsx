import React, { Component } from 'react';
import { formatDistance, format } from 'date-fns';
import styled from 'styled-components';
import { IPost } from './models';

interface IPostFooter {
  post: IPost;
}

const Footer = styled.span`
  color: ${props => props.theme.textColor};
  opacity: 0.5;
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
      )} {post.app ? `via ${post.app}` : ''}
      </Footer>
    );
  }
}

export default PostFooter;
