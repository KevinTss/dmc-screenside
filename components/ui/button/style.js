import styled from 'styled-components';

const BaseButton = styled.button`
  display: inline-flex;
  background: transparent;
  border-radius: ${({ theme }) => theme.border.radius};
  padding: ${({ theme }) => theme.spacing.s};
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-family: ${({ theme }) => theme.font.family};
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  justify-content: center;

  &:active {
    opacity: 0.5;
  }
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
