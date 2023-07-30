import { useFormik } from 'formik';
import { useState, FormEventHandler } from 'react';
import { Form, Field } from 'src/components/ui';
import { useLocale } from 'src/hooks';

import { FormContainer, StatusText, Button } from './ContactForm.styles';

const initialFormValue = {
  name: '',
  email: '',
  message: '',
}

type ContactFormProps = {
  onSuccess: VoidFunction
  isDisabled: boolean
}

export const ContactForm = ({ onSuccess, isDisabled }: ContactFormProps) => {
  const [status, setStatus] = useState<'error' | 'success' | null>(null);
  const { t } = useLocale();
  const { handleChange, values, handleSubmit } = useFormik<typeof initialFormValue>({
    initialValues: initialFormValue,
    onSubmit: (values, { resetForm }) => {
      if (!values.email || !values.name || !values.message) return
      if (isDisabled) return
      fetch('/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values), // body data type must match "Content-Type" header
      })
        .then((response) => {
          if (!response.ok) {
            console.warn(response);
            setStatus('error');
          } else {
            onSuccess()
            resetForm();
          }
        })
        .catch((e) => {
          console.warn(e);
          setStatus('error');
        });
    },
  });

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit as FormEventHandler}>
        <Field
          label={t('component.ContactForm.label.name')}
          id='name'
          name='name'
          type='text'
          onChange={handleChange}
          value={values.name}
        />
        <Field
          label={t('component.ContactForm.label.email')}
          id='email'
          name='email'
          type='email'
          onChange={handleChange}
          value={values.email}
        />
        <Field
          label={t('component.ContactForm.label.message')}
          id='message'
          name='message'
          type='textarea'
          onChange={handleChange}
          value={values.message}
        />
        <Button type='submit' disabled={isDisabled}>
          {t('component.ContactForm.submit')}
        </Button>
        {status === 'error' && (
          <StatusText>
            Internal error, try again later
          </StatusText>
        )}
      </Form>
    </FormContainer>
  );
}
