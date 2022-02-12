import { useLocale } from '../../../hooks';
import ContactFormSection from '../../section/contact/form';
import PageHeader from '../../page-header';
import Template from '../../template/default';

export default function ContactView() {
  const { t } = useLocale();

  return (
    <Template>
      <PageHeader title={t('page.contact.title')} />
      <ContactFormSection />
    </Template>
  );
}
