import Template from '../../template/default';
import ProductsContainer from '../../product/container';
import PageHeader from '../../page-header';
import { useLocale, useProducts, useSearchProducts } from '../../../hooks';
import { Content, Aside } from './style';
import { Input } from '../../ui';

export default function ShopView() {
  const { t } = useLocale();
  const { data: products } = useProducts();
  const {
    search,
    isLoading,
    data: searchProducts,
    isSearchActive,
  } = useSearchProducts();

  const productsToDisplay = isSearchActive
    ? searchProducts?.data
    : products?.data;

  return (
    <Template>
      <PageHeader title={t('page.shop.title')} />
      <Content>
        <Aside>
          <Input
            iconLeft='search'
            placeholder={t('page.shop.searchPlaceholder')}
            type='text'
            onChange={search}
          />
        </Aside>
        <ProductsContainer products={productsToDisplay || []} />
      </Content>
    </Template>
  );
}
