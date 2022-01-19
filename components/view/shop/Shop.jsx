// import { useRouter } from 'next/router';

import Template from '../../template/default';
import ProductsContainer from '../../product/container';
import MOCK_PRODUCTS from '../../../mocks/products.json';

const HomeView = () => {
  console.log('MOCK_PRODUCTS', MOCK_PRODUCTS);
  return (
    <Template>
      <h1>Page Shop</h1>
      <ProductsContainer products={MOCK_PRODUCTS} />
    </Template>
  );
};

export default HomeView;
