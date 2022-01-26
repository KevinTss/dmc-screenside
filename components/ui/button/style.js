import styled from 'styled-components';

export const BaseButton = styled.button`
  background: transparent;
  border: 2px solid ${({ theme }) => theme.color.primary};
  width: 100%;
  border-radius: ${({ theme }) => theme.border.radius};
  padding: ${({ theme }) => theme.spacing.s};
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.font.size.m};
  cursor: pointer;
`;
