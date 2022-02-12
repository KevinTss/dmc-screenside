import styled from 'styled-components';

export const Text = styled.p`
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight};
`;
