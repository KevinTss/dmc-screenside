import { Form } from './style';

export default function FormElement({ children, ...props }) {
  return <Form {...props}>{children}</Form>;
}
