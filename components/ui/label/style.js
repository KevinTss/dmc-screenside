import styled from 'styled-components';

export const Label = styled.label`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight};
  margin-bottom: ${({ theme }) => theme.spacing.s};
`;
