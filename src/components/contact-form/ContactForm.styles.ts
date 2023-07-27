import styled from 'styled-components';

export const FormContainer = styled.div`
  margin: 80px 0;
`;

export const StatusText = styled.p`
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  font-size: ${({ theme }) => theme.font.size[16]};
  background-color: ${({ theme }) => theme.color.primary[600]};
  border: 1px solid ${({ theme }) => theme.color.primary[600]};
  color: ${({ theme }) => theme.color.neutral[0]};
  font-weight: ${({ theme }) => theme.font.weight[500]};
  padding: ${(p) => `${p.theme.space.S16}px ${p.theme.space.S24}px`};
  margin-top: ${(p) => p.theme.space.S12}px;
  cursor: pointer;
  border-radius: 4px;

  &[disabled] {
    cursor: not-allowed;
    filter: grayscale(60%);
  }
`;
