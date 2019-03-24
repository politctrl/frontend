import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)<{ bold?: boolean }>`
  text-decoration: none;
  color: ${props => props.theme.textColor};

  ${props => props.bold && css`
    font-weight: bold;
  `}

  :hover, :active, :focus {
    text-decoration-line: underline;
  }
`;
