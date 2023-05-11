import styled, { css } from 'styled-components';

export const Nav = styled.nav``;

export const Items = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  height: 100%;
  ${(p) =>
    p.isVertical &&
    css`
      flex-direction: column;
      margin-top: 50px;
      gap: 10px;
    `};
`;

export const Item = styled.li`
  margin-right: ${({ theme }) => theme.spacing.m};
`;
