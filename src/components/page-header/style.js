import styled from 'styled-components';

export const PageHeader = styled.div`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.m} 0`};
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  padding-bottom: ${({ theme }) => theme.spacing.m};
`;
