import { DefaultTemplate } from '../../template/default';
import { HomeHeaderSection } from '../../section/home/header';
// import HomeFeaturedProductsSection from '../../section/home/featured-products';

export const HomeView = () => (
  <DefaultTemplate>
    <HomeHeaderSection />
    {/* <HomeFeaturedProductsSection /> */}
  </DefaultTemplate>
);
