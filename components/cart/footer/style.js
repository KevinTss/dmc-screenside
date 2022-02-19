import styled from 'styled-components';

export const Container = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.l};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
