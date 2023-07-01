import type { ReactNode } from 'react'

import { Form as FormEl } from './Form.styles';

type FormProps = {
  children: ReactNode;
}

export const Form = ({ children, ...props }: FormProps) => <FormEl {...props}>{children}</FormEl>;
