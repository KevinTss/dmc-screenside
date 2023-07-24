import { ChangeEventHandler } from 'react';

import { InputContainer, Input as InputElement, Textarea, IconLeftContainer } from './input.styles';

export type InputProps = {
  type: 'textarea' | 'text' | 'email',
  id: string,
  name: string,
  value: string,
  onChange: ChangeEventHandler
}

export const Input = ({ type, ...props }: InputProps) => {
  let input = type === 'textarea' ? <Textarea {...props} /> : <InputElement type={type} {...props} />;

  return (
    <InputContainer>
      {input}
    </InputContainer>
  );
}
