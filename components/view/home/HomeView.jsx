import Template from '../../template/default';
// import PageHeader from '../../page-header';
// import { useLocale } from '../../../hooks';
import HomeHeaderSection from '../../section/home/header';
import HomeFeaturedProductsSection from '../../section/home/featured-products';

export default function HomeView() {
  // const { t } = useLocale();

  return (
    <Template>
      {/* <PageHeader title={t('page.home.title')} /> */}
      <HomeHeaderSection />
      <HomeFeaturedProductsSection />
    </Template>
  );
}
