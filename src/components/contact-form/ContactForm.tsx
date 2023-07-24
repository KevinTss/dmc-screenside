import { useFormik } from 'formik';
import { useState } from 'react';
import { Button, Form, Field } from 'src/components/ui';
import { useLocale } from 'src/hooks';

import { StatusText } from './ContactForm.styles';

const initialFormValue = {
  name: '',
  email: '',
  message: '',
}

export const ContactForm = () => {
  const [status, setStatus] = useState<'error' | 'success' | null>(null);
  const { t } = useLocale();
  const { handleChange, values, handleSubmit } = useFormik<typeof initialFormValue>({
    initialValues: initialFormValue,
    onSubmit: (values, { resetForm }) => {
      fetch('/api/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(values), // body data type must match "Content-Type" header
      })
        .then((response) => {
          if (!response.ok) {
            console.warn(response);
            setStatus('error');
          } else {
            setStatus('success');
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
    <Form onSubmit={(e) => console.log('submit', e)}>
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
      <Button type='submit'>
        {t('component.ContactForm.submit')}
      </Button>
      {status && (
        <StatusText>
          {status === 'error'
            ? 'Internal error, try again later'
            : 'You message has been sent'}
        </StatusText>
      )}
    </Form>
  );
}
