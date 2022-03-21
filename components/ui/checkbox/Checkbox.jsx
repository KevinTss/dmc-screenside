import { Label, CheckMark, Input } from './style';

export default function InputElement({ children, onChange, ...props }) {
  return (
    <Label>
      {children}
      <Input type='checkbox' onChange={onChange} {...props} />
      <CheckMark />
    </Label>
  );
}
