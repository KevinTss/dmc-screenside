import styled from 'styled-components';

export const NavLinkEl = styled.a`
  color: ${({ theme }) => theme.color.text};
  text-decoration: none;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.s}`};
  border-radius: ${({ theme }) => theme.border.radius};

  &:hover,
  &:focus,
  &:active {
    background-color: ${({ theme }) => theme.color.background};
  }
`;
