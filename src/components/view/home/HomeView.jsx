import { HomePresentationSection } from 'src/components/home-presentation-section';
import { HomeFeaturedProductsSection } from 'src/components/section/home/featured-products';
import { HomeHeaderSection } from 'src/components/section/home/header';
import { DefaultTemplate } from 'src/components/template/default';

export const HomeView = () => (
  <DefaultTemplate>
    <HomeHeaderSection />
    <HomePresentationSection />
    <HomeFeaturedProductsSection />
  </DefaultTemplate>
);
