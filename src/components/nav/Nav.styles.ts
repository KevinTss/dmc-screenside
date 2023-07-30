import styled, { css } from 'styled-components';

export const Nav = styled.nav``;
export const Item = styled.li`
  width: 100%;
  padding: 10px 0;
`;

type ItemsProps = {
  $isVertical: boolean;
};

export const Items = styled.ul<ItemsProps>`
  list-style: none;
  display: flex;
  align-items: center;
  height: 100%;
  gap: 24px;
  color: white;

  ${(p) =>
    p.$isVertical &&
    css`
      flex-direction: column;
      justify-content: flex-start;
      margin-top: 16px;
      margin-left: 16px;
      gap: 10px;
      color: black;
    `};
`;
