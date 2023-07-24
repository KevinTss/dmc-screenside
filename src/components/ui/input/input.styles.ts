import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.neutral[600]};
`;

export const IconLeftContainer = styled.div`
  margin-right: ${({ theme }) => theme.space.S04};
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.color.neutral[900]};
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  border: 0;
  width: 100%;

  ::placeholder {
    font-size: ${({ theme }) => theme.font.size[16]};
  }
`;

export const Textarea = styled.textarea`
  color: ${({ theme }) => theme.color.primary};
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.size[16]};
  font-weight: ${({ theme }) => theme.font.weight[500]};
  border: 0;
  width: 100%;
  min-height: 200px;
  resize: vertical;

  ::placeholder {
    font-size: ${({ theme }) => theme.font.size[16]};
  }
`;
