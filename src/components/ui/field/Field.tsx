import { Field as FieldElement, ErrorMessageContainer, ErrorMessage } from './Field.styles';
import { Input, InputProps } from '../input';
import { Label } from '../label';

type FieldProps = {
  errorMessage?: string,
  label?: string,
} & InputProps

export const Field = ({
  errorMessage = '',
  label = '',
  ...props
}: FieldProps) => {
  return (
    <FieldElement>
      {label && <Label htmlFor={props.id}>{label}</Label>}
      <Input {...props} />
      <ErrorMessageContainer>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </ErrorMessageContainer>
    </FieldElement>
  );
}
