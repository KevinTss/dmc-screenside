import styled from 'styled-components';

export const Button = styled.button`
  margin: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
