import styled from 'styled-components';

export const Container = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.l};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ErrorMessage = styled.p`
  font-size: ${({ theme }) => theme.font.size.s};
  color: ${({ theme }) => theme.color.danger};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  text-align: center;
  margin-bottom: 20px;
`;
