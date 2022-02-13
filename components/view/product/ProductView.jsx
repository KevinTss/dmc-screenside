import { useRouter } from 'next/router';

import { useLocale, useProduct } from '../../../hooks';
import PageHeader from '../../page-header';
import ProductSheet from '../../product/sheet';
import Template from '../../template/default';

export default function ProductView() {
  const { t } = useLocale();
  const {
    query: { handle },
  } = useRouter();
  const { data: product, isLoading } = useProduct(handle);

  return (
    <Template>
      {/* <PageHeader title={t('page.shop.title')} /> */}
      {isLoading && <p>Loading...</p>}
      {!isLoading && !product && <p>No product found</p>}
      {!isLoading && product && <ProductSheet product={product} />}
    </Template>
  );
}
