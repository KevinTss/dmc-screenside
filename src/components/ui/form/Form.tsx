import type { FormEventHandler, ReactNode } from 'react'

import { Form as FormEl } from './Form.styles';

type FormProps = {
  children: ReactNode;
  onSubmit?: FormEventHandler
}

export const Form = ({ children, ...props }: FormProps) => <FormEl {...props}>{children}</FormEl>;
