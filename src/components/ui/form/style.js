import styled from 'styled-components';

export const Form = styled.form`
  display: grid;
  grid-template-rows: auto;
  grid-gap: ${({ theme }) => theme.spacing.l};
`;
