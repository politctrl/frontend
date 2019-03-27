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

const PostGrid = ({ posts }: PostGridProps) => {
  return (
    <HomeContainer>
      <Grid flow="dense"
        columns="repeat(auto-fit,minmax(360px,1fr))"
        gap="26px"
        alignContent="space-around">
        { posts.map(post =>
          <Cell key={post.id}><Post post={post} /></Cell>) }
      </Grid>
    </HomeContainer>
  );
};

export default PostGrid;
