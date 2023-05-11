import { Field, ErrorMessageContainer, ErrorMessage } from './style';

import Input from '../input';
import Label from '../label';

export default function FieldElement({
  label,
  id,
  type,
  name,
  value,
  onChange,
  onBlur,
  errorMessage,
}) {
  return (
    <Field>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <ErrorMessageContainer>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </ErrorMessageContainer>
    </Field>
  );
}
