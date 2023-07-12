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

type OverlayProps = {
  $isVisible: boolean;
};

export const Overlay = styled.div<OverlayProps>`
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

type DrawerElProps = OverlayProps;

const SPACE = 20;

export const DrawerEl = styled.div<DrawerElProps>`
  position: absolute;
  top: ${SPACE / 2}px;
  left: -${SPACE / 2}px;
  right: -100vw;
  bottom: -100vh;
  display: flex;
  flex-direction: column;
  height: calc(100% - ${SPACE}px);
  width: 400px;
  max-width: 100vw;
  background-color: white;
  box-shadow: 0 15px 45px 0 rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  cursor: default;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  padding: ${({ theme }) => theme.space.S12};
  transform: ${({ $isVisible }) =>
    $isVisible ? 'translateX(-100%)' : 'translateX(0)'};
  transition: all 0.15s ease-out;
  z-index: 11;
  border-radius: 8px;
`;
