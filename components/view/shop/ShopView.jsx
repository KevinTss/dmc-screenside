import Template from '../../template/default';
import ProductsContainer from '../../product/container';
import PageHeader from '../../page-header';
import { useLocale, useProducts } from '../../../hooks';

export default function ShopView() {
  const { t } = useLocale();
  const { data: products } = useProducts();

  return (
    <Template>
      <PageHeader title={t('page.shop.title')} />
      <ProductsContainer products={products?.data || []} />
    </Template>
  );
}
