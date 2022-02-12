import styled from 'styled-components';

export const Link = styled.a`
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight};
`;
