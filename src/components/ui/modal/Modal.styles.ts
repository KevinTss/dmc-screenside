import styled from 'styled-components';

import type { IsVisibleProps } from './Modal.types';

export const Container = styled.div`
  display: flex;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  z-index: 10;
  pointer-events: none;
`;

export const Overlay = styled.div<IsVisibleProps>`
  z-index: 10;
  position: absolute;
  top: 0;
  left: -100vw;
  right: 0;
  bottom: -100vh;
  overflow: auto;
  display: ${({ $isVisible }) => ($isVisible ? 'flex' : 'none')};
  justify-content: center;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  pointer-events: all;
`;

export const DrawerEl = styled.div<IsVisibleProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  width: 500px;
  background-color: white;
  box-shadow: 0 15px 45px 0 rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  cursor: default;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  padding: ${({ theme }) => theme.space.S16}px;
  transform: ${({ $isVisible }) =>
    $isVisible ? 'translate(-50%, -50%)' : 'translate(-100%, -50%)'};
  transition: all 0.3s ease;
  z-index: 11;
  border-radius: 12px;
  pointer-events: all;
`;
