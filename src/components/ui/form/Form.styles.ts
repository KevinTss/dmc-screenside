import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.space.S16}px;
  width: 700px;
`;
