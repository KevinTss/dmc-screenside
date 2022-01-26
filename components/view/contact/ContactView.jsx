import Template from '../../template/default';
import PageHeader from '../../page-header';
import { useLocale } from '../../../hooks';

export default function ContactView() {
  const { t } = useLocale();

  return (
    <Template>
      <PageHeader title={t('page.contact.title')} />
    </Template>
  );
}
