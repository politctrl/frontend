import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface LoaderProps {
  error: {} | null;
  isLoading: boolean;
  children: any;
}

const LoadingContainer = styled.div`
  color: ${props => props.theme.textColor};
  text-align: center;
`;

const LoadingText = styled.p`
  font-size: 22pt;
  margin-top: 5px;
`;

const LoadingAnimation = styled.div`
  background-color: ${props => props.theme.textColor};
  height: 72px;
  width: 72px;
  border-radius: 50%;
  margin: 0 auto;
  animation: 1.5s scaleout infinite;
  @keyframes scaleout {
    0% {
      transform: scale(0.0);
      opacity: 1;
    }
    50% {
      opacity: 0.75;
    }
    100% {
      transform: scale(1.0);
      opacity: 0;
    }
  }
`;

const Loader = ({ error, isLoading, children }: LoaderProps) => {
  if (error) {
    return (
      <div>
        <h3>Ooppsie wooppsie!</h3>
        <p>{error.toString()}</p>
      </div>
    );
  }
  if (isLoading) {
    return (
      <LoadingContainer>
        <LoadingAnimation></LoadingAnimation>
        <LoadingText>Loading...</LoadingText>
      </LoadingContainer>
    );
  }
  return children;
};

export default Loader;
