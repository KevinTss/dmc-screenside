import styled from 'styled-components';

export const Label = styled.label`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[500]};
  margin-bottom: ${({ theme }) => theme.space.S12};
`;
