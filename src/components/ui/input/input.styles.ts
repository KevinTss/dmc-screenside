import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.neutral[600]};
  overflow: hidden;
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
  padding: 14px 20px;
  outline: none;

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
  min-height: 120px;
  resize: vertical;
  padding: 14px 20px;
  outline: none;

  ::placeholder {
    font-size: ${({ theme }) => theme.font.size[16]};
  }
`;
