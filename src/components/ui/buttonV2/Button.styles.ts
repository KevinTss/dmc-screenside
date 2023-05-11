import styled from 'styled-components';

const BaseButton = styled.button`
  display: inline-flex;
  gap: 10px;
  background: transparent;
  padding: ${(p) => `${p.theme.space.S20} ${p.theme.space.S24}`};
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  justify-content: center;

  /* &:active {
    opacity: 0.5;
  } */
`;

export const DefaultButton = styled(BaseButton)`
  border: 2px solid ${({ theme }) => theme.color.primary};
`;

export const MinimalButton = styled(BaseButton)`
  border: 2px solid transparent;
`;

export const PrimaryButton = styled(BaseButton)`
  border: 2px solid ${({ theme }) => theme.color.primary};
  color: white;
  background-color: ${({ theme }) => theme.color.primary};
`;

export const IconContainer = styled.span``;
