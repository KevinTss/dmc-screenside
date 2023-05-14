import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: ${({ theme }) => `${theme.space.S16}px 0`};
`;

export const Container1 = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral[500]};
  padding-bottom: ${({ theme }) => theme.space.S16};
`;
