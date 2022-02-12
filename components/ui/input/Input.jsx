import { Input, Textarea } from './style';

export default function InputElement({ type, ...props }) {
  if (type === 'textarea') {
    return <Textarea {...props} />;
  }

  return <Input type={type} {...props} />;
}
