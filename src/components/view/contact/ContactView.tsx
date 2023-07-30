
import { ContactForm } from 'src/components/contact-form';
import { DefaultTemplate } from 'src/components/template';
import { useLocale } from 'src/hooks';

import { ContentContainer, Iframe, Title, Text } from './ContactView.styles';

export const ContactView = () => {
  const { t } = useLocale();

  return (
    <DefaultTemplate forceHeaderBlack>
      <ContentContainer>
        <Title>{t('component.ContactView.title')}</Title>
        <Text>
          Thank you for reaching out to us.
          <br />
          <br />
          For inquiries, please feel free to call us at +32 (0)486 99 94 01.
          <br />
          You may also reach us via email on dmc.concept.sprl@gmail.com.
          <br />
          <br />
          Rue Vanderkindere 404, 1180 Uccle, Belgium
        </Text>
        <ContactForm />
        <Iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.905713904105!2d4.356301015633432!3d50.81438556895559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c4f99a19ff75%3A0xc68b139471e1264f!2sRue%20Vanderkindere%20404%2C%201180%20Uccle!5e0!3m2!1sen!2sbe!4v1652596983116!5m2!1sen!2sbe'
          loading='lazy'
        />
      </ContentContainer>
    </DefaultTemplate>
  );
};
