import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: fixed;
  width: 1px;
  height: 100vh;
  top: 0;
  right: 0;
  z-index: 10;
`;

export const Overlay = styled.div`
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
`;

export const DrawerEl = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: -100vw;
  bottom: -100vh;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 400px;
  background-color: white;
  box-shadow: 0 15px 45px 0 rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  cursor: default;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  padding: ${({ theme }) => theme.spacing.m};
  transform: ${({ $isVisible }) =>
    $isVisible ? 'translateX(-400px)' : 'translateX(0)'};
  transition: all 0.3s ease;
  z-index: 11;
`;
