import Link from 'next/link';
import styled, { css } from 'styled-components';

// TODO: fix the error with undefined element in import, probably related to SSR config
// export const Logo = styled(LogoUI)``;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: white;
  padding: 0 8px;
`;

export const Left = styled.div`
  display: flex;
  padding-left: 72px;
`;

export const Middle = styled.div`
  display: flex;
  justify-content: center;
  gap: ${(p) => p.theme.space.S48}px;
`;

export const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  padding-right: 72px;
`;

type ContainerProps = {
  $isBlack: boolean;
};

export const Container = styled.header<ContainerProps>`
  width: 100%;
  height: 85px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  border-bottom: 1px solid rgba(242, 242, 244, 0.3);
  background-color: ${(p) =>
    p.$isBlack ? p.theme.color.background.main : 'none'};
  transition: background-color 0.2s ease;

  ${(p) =>
    p.$isBlack &&
    css`
      ${Left} svg {
        fill: black !important;
      }
      ${Right} svg path {
        stroke: black !important;
      }
      ${NavLink} {
        color: black;
      }
    `}
`;

export const SearchContainer = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(9px);
  border-radius: 100px;
  width: 200px;
  height: 51px;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  gap: 10px;
`;

export const Input = styled.input`
  border: none;
  background: none;
  color: white;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  position: relative;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const Badge = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -8px;
  right: -8px;
  background-color: ${(p) => p.theme.color.primary[600]};
  color: white;
  font-size: 10px;
  line-height: 10px;
`;
