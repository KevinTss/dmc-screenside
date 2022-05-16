import { useLocale } from '../../../hooks';
import ContactFormSection from '../../section/contact/form';
import PageHeader from '../../page-header';
import Template from '../../template/default';
import { ContentContainer, Iframe, RightContainer } from './styles';
import { Text } from '../../ui';

export default function ContactView() {
  const { t } = useLocale();

  return (
    <Template>
      <PageHeader title={t('page.contact.title')} />
      <ContentContainer>
        <ContactFormSection />
        <RightContainer>
          <Iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.905713904105!2d4.356301015633432!3d50.81438556895559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c4f99a19ff75%3A0xc68b139471e1264f!2sRue%20Vanderkindere%20404%2C%201180%20Uccle!5e0!3m2!1sen!2sbe!4v1652596983116!5m2!1sen!2sbe'
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          />
          <Text>Rue Vanderkindere 404</Text>
          <Text>1180 Uccle</Text>
          <Text>Belgium</Text>
          <Text>dmc.concept.sprl@gmail.com</Text>
          <Text>+32 (0)486 99 94 01</Text>
        </RightContainer>
      </ContentContainer>
    </Template>
  );
}
