import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  border-radius: ${({ theme }) => theme.border.radius};
  border: 1px solid ${({ theme }) => theme.color.primary};
  padding: ${({ theme }) => theme.spacing.xs};
`;

export const IconLeftContainer = styled.div`
  margin-right: ${({ theme }) => theme.spacing.xs};
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  border: 0;

  ::placeholder {
    font-size: ${({ theme }) => theme.font.size.xs};
  }
`;

export const Textarea = styled.textarea`
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  border: 0;

  ::placeholder {
    font-size: ${({ theme }) => theme.font.size.xs};
  }
`;
