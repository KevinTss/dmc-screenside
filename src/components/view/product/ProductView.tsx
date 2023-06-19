import { useRouter } from 'next/router';
import { ProductSheet } from 'src/components/product/sheet';
import { DefaultTemplate } from 'src/components/template/default';
import { useProduct } from 'src/hooks';


export const ProductView = () => {
  const {
    query: { handle },
  } = useRouter();
  const { data: product, isLoading } = useProduct(handle as string);

  return (
    <DefaultTemplate>
      {isLoading && <p>Loading...</p>}
      {!isLoading && !product && <p>No product found</p>}
      {!isLoading && product && <ProductSheet product={product} />}
    </DefaultTemplate>
  );
}
