import Template from '../../template/default';
import PageHeader from '../../page-header';
import { useLocale } from '../../../hooks';
import HomeHeaderSection from '../../section/home/header';

export default function HomeView() {
  const { t } = useLocale();

  return (
    <Template>
      {/* <PageHeader title={t('page.home.title')} /> */}
      <HomeHeaderSection />
    </Template>
  );
}
