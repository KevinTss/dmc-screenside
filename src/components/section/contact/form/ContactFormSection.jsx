import { useFormik } from 'formik';
import { useState } from 'react';
import { useLocale } from 'src/hooks';

import { StatusText } from './styles';
import { Button, Form, Field } from '../../../ui';

export default function ContactFormSection() {
  const [status, setStatus] = useState(null);
  const { t } = useLocale();
  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
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
    <Form onSubmit={handleSubmit} style={{ flex: '1' }}>
      <Field
        label={t('component.ContactFormSection.formLabelFullName')}
        id='name'
        name='name'
        type='text'
        onChange={handleChange}
        value={values.name}
      />
      <Field
        label={t('component.ContactFormSection.formLabelEmail')}
        id='email'
        name='email'
        type='email'
        onChange={handleChange}
        value={values.email}
      />
      <Field
        label={t('component.ContactFormSection.formLabelMessage')}
        id='message'
        name='message'
        type='textarea'
        onChange={handleChange}
        value={values.message}
      />
      <Button type='submit'>
        {t('component.ContactFormSection.formSubmitButton')}
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
