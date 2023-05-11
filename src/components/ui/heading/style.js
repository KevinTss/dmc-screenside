import styled from 'styled-components';

export const HeadingEl = styled.h1`
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.font.size.xl};
`;
