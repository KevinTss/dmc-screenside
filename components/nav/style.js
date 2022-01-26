import styled from 'styled-components';

export const Nav = styled.nav``;

export const Items = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Item = styled.li`
  margin-right: ${({ theme }) => theme.spacing.m};
`;
