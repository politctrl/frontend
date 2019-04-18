import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface PaginationProps {
  currentPage: number;
}

const PaginationContainer = styled.div`
  text-align: center;
`;

const PageLink = styled(Link)<{ current?: boolean }>`
  padding: 5px;
  font-size: 150%;
  color: ${props => props.theme.textColor};
  text-decoration: none;
  border-radius: 10%;

  ${props => props.current && css`
    color: ${props => props.theme.bgColor};
    background-color: ${props => props.theme.textColor};
  `}
`;

export const Pagination = ({ currentPage }: PaginationProps) => {
  const pages: number[] = [];
  for (
    let i = currentPage - 2 >= 0 ? currentPage - 2 : 0;
    i < currentPage + 2;
    i += 1
  ) {
    pages.push(i);
  }
  return (
    <PaginationContainer>
      { pages.map(p =>
        <PageLink key={`page_link_${p}`}
          current={p === currentPage}
          to={{ search: `?page=${p}` }}>{p}</PageLink>) }
    </PaginationContainer>
  );
};
