import React from 'react';
import { IEmbed } from './models';
import styled from 'styled-components';

interface IPostEmbedThumbnailProps {
  embed: IEmbed;
}

const ThumbnailContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 16px;
  margin-bottom: 8px;
`;

const Thumbnail = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  height: 100%;
  width: auto;
  transform: translate(-50%,-50%);
`;

const PostEmbedThumbnail = ({ embed }: IPostEmbedThumbnailProps) => {
  /**
   * "rel" prop in <a> tag avoids to release window.opener to opened site
   * Some more info on this vulnerability: https://bit.ly/2gUMutQ
   */
  return (
    <a href={embed.url} target="_blank" rel="noopener noreferrer">
      <ThumbnailContainer>
        <Thumbnail src={embed.url} />
      </ThumbnailContainer>
    </a>
  );
};

export default PostEmbedThumbnail;
