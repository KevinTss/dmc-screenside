import styled from 'styled-components';

export const Container = styled.div`
  margin-top: ${({ theme }) => theme.space.S20};
  margin-bottom: ${({ theme }) => theme.space.S20};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  border-top: 1px solid ${(p) => p.theme.color.neutral[400]};
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Bottom = styled.div`
  > button {
    width: 100%;
  }
`;

export const ErrorMessage = styled.p`
  font-size: ${({ theme }) => theme.font.size[14]};
  color: ${({ theme }) => theme.color.primary[400]};
  font-weight: ${({ theme }) => theme.font.weight[500]};
  text-align: center;
  margin-bottom: 20px;
`;
