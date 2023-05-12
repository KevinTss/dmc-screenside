import styled from 'styled-components';

type HeaderProps = {
  $isWhite: boolean;
};

export const Header = styled.header<HeaderProps>`
  width: 100%;
  height: 85px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  border-bottom: 1px solid rgba(242, 242, 244, 0.3);
  background-color: ${(p) => (p.$isWhite ? 'white' : 'none')};
`;

export const Left = styled.div`
  display: flex;
  padding-left: 72px;
`;

export const Middle = styled.div`
  display: flex;
`;

export const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  padding-right: 72px;
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
