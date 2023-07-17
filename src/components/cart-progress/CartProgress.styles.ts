import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 26px auto 26px;
  border-bottom: ${({ theme }) => `2px solid ${theme.color.primary[600]}`};
  padding: ${(p) => `${p.theme.space.S20}px ${p.theme.space.S16}px`};
`;

export const Title = styled.h3`
  flex: 1;
  font-size: ${(p) => p.theme.font.size[24]};
  text-align: center;
  font-weight: ${(p) => p.theme.font.weight[500]};
`;

export const Left = styled.div``;
export const Right = styled.div``;

export const Button = styled.button`
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
