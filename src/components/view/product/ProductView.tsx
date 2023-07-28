import { useRouter } from 'next/router';

import { ProductSheet } from '../../../components/product/sheet';
import { DefaultTemplate } from '../../../components/template/default';
import { useProduct } from '../../../hooks';


export const ProductView = () => {
  const {
    query: { handle },
  } = useRouter();
  const { data: product, isLoading } = useProduct(handle as string);

  return (
    <DefaultTemplate forceHeaderBlack>
      {isLoading && <p>Loading...</p>}
      {!isLoading && !product && <p>No product found</p>}
      {!isLoading && product && <ProductSheet product={product} />}
    </DefaultTemplate>
  );
}
