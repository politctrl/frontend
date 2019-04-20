import React from 'react';
import { formatDistance, format } from 'date-fns';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IPost } from './models';

interface IPostFooter {
  post: IPost;
}

const Footer = styled.span`
  color: ${props => props.theme.textColor};
  opacity: 0.5;
  font-size: 85%;
`;

const FooterLink = styled(Link)`
  color: inherit;
  font-family: inherit;
  text-decoration: none;
`;

const FooterALink = styled.a`
  color: inherit;
  font-family: inherit;
  text-decoration: none;
`;

const EmojiStyle = styled.img`
  height: 12px;
`;

const LinkEmoji = () => <EmojiStyle
  src="https://twemoji.maxcdn.com/2/72x72/1f517.png"
  draggable={false} />;

const CardIndexEmoji = () => <EmojiStyle
  src="https://twemoji.maxcdn.com/2/72x72/1f5c2.png"
  draggable={false} />;

const PostFooter = ({ post }: IPostFooter) => {
  const texts = [];

  const { createTimestamp, deleteTimestamp, app, id, archiveUrl } = post;
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
    <Footer>
      <FooterLink to={`/post/${id}`}>
        <LinkEmoji />
      </FooterLink> { archiveUrl
      && <FooterALink href={archiveUrl}>
        <CardIndexEmoji />
      </FooterALink> } ꞏ { texts.join(' ꞏ ') }</Footer>
  );
};

export default PostFooter;
