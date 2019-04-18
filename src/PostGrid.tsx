import React from 'react';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';
import Post from './Post';
import { IPost } from './models';

interface PostGridProps {
  posts: IPost[];
}

const HomeContainer = styled.div`
  background-color: ${props => props.theme.bgColor};
  padding: 16px;
`;

const InfoText = styled.p`
  color: ${props => props.theme.textColor};
  text-align: center;
  font-size: 16pt;
`;

const PostGrid = ({ posts }: PostGridProps) => {
  return (
    <HomeContainer>
      { posts && posts.length > 0
        ? <Grid flow="dense"
            columns="repeat(auto-fit,minmax(360px,1fr))"
            gap="26px"
            alignContent="space-around">
            { posts.map(post =>
              <Cell key={`cell_post_${post.id}`}>
                <Post key={`post_${post.id}`} post={post} />
              </Cell>) }
          </Grid>
        : <InfoText>No posts on this page</InfoText> }
    </HomeContainer>
  );
};

export default PostGrid;
