import { InputContainer, Input, Textarea, IconLeftContainer } from './style';
import Icon from '../icon';

export default function InputElement({ type, iconLeft, ...props }) {
  let input = <Input type={type} {...props} />;

  if (type === 'textarea') {
    input = <Textarea {...props} />;
  }

  return (
    <InputContainer>
      {iconLeft && (
        <IconLeftContainer>
          <Icon name={iconLeft} />
        </IconLeftContainer>
      )}
      {input}
    </InputContainer>
  );
}
