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

export const List = styled.ul``;
