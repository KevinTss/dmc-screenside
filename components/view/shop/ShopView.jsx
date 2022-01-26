import Template from '../../template/default';
import ProductsContainer from '../../product/container';
import MOCK_PRODUCTS from '../../../mocks/products.json';
import PageHeader from '../../page-header';
import { useLocale } from '../../../hooks';

export default function ShopView() {
  const { t } = useLocale();

  return (
    <Template>
      <PageHeader title={t('page.shop.title')} />
      <ProductsContainer products={MOCK_PRODUCTS} />
    </Template>
  );
}
