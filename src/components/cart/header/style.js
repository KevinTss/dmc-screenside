import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: ${({ theme }) => `1px solid ${theme.color.border}`};
  margin-bottom: ${({ theme }) => theme.spacing.l};
`;

export const Title = styled.h3`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.font.size.s};
  margin-bottom: ${({ theme }) => theme.spacing.l};
`;
