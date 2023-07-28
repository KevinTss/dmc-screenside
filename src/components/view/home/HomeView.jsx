import { HomePresentationSection } from '../../../components/home-presentation-section';
import { HomeFeaturedProductsSection } from '../../../components/section/home/featured-products';
import { HomeHeaderSection } from '../../../components/section/home/header';
import { DefaultTemplate } from '../../../components/template/default';

export const HomeView = () => (
  <DefaultTemplate>
    <HomeHeaderSection />
    <HomePresentationSection />
    <HomeFeaturedProductsSection />
  </DefaultTemplate>
);
