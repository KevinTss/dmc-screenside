import { useFormik } from 'formik';

import { Button, Form, Field } from '../../../ui';
import { useLocale } from '../../../../hooks';

export default function ContactFormSection() {
  const { t } = useLocale();
  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
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
    </Form>
  );
}
