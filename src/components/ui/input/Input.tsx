import { InputContainer, Input, Textarea, IconLeftContainer } from './input.styles';

type InputElementProps = {
  type: 'textarea' | 'text'
}

export const InputElement = ({ type, ...props }: InputElementProps) => {
  let input = <Input type={type} {...props} />;

  if (type === 'textarea') {
    input = <Textarea {...props} />;
  }

  return (
    <InputContainer>
      {input}
    </InputContainer>
  );
}
