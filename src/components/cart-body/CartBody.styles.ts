import styled from 'styled-components';

export const Container = styled.div`
  margin-top: ${({ theme }) => theme.space.S20};
  margin-bottom: ${({ theme }) => theme.space.S20};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  overflow-y: auto;
`;

export const Title = styled.h3`
  font-weight: ${(p) => p.theme.font.weight[500]};
  color: ${(p) => p.theme.font.color[900]};
  padding: 0 28px;
`;

export const List = styled.ul`
  padding: 0 12px;
`;
