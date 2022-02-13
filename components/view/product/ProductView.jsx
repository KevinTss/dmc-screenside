import Template from '../../template/default';
import ProductsContainer from '../../product/container';
import PageHeader from '../../page-header';
import { useLocale, useProduct } from '../../../hooks';
import { useRouter } from 'next/router';

export default function ProductView() {
  const { t } = useLocale();
  const {
    query: { handle },
  } = useRouter();
  const { data: product } = useProduct(handle);
  console.log('router', handle, product);

  return (
    <Template>
      <PageHeader title={t('page.shop.title')} />
      {handle}
      {/* <ProductsContainer products={products?.data || []} /> */}
    </Template>
  );
}
