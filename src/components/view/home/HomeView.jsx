import { HomeFeaturedProductsSection } from '../../section/home/featured-products';
import { HomeHeaderSection } from '../../section/home/header';
import { DefaultTemplate } from '../../template/default';

export const HomeView = () => (
  <DefaultTemplate>
    <HomeHeaderSection />
    <HomeFeaturedProductsSection />
  </DefaultTemplate>
);
