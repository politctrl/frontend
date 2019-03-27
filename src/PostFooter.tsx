import React from 'react';
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

const PostFooter = ({ post }: IPostFooter) => {
  const texts = [];

  const { createTimestamp, deleteTimestamp, app } = post;
  if (deleteTimestamp) {
    texts.push(`Deleted ${formatDistance(
      parseInt(deleteTimestamp, 10),
      parseInt(createTimestamp, 10),
      { addSuffix: true },
    )}, ${formatDistance(
      parseInt(deleteTimestamp, 10),
      new Date(),
      { addSuffix: true },
    )}`);
  } else {
    texts.push('Deleted on unknown time');
  }
  texts.push(`Posted on ${format(
    parseInt(createTimestamp, 10),
    'yyyy-MM-dd HH:mm:ss',
  )}, ${formatDistance(
    parseInt(createTimestamp, 10),
    new Date(),
    { addSuffix: true },
  )} ${app ? `via ${app}` : ''}`);

  return (
    <Footer>{ texts.join(' ꞏ ') }</Footer>
  );
};

export default PostFooter;
