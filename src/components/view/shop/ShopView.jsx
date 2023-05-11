import Template from '../../template/default';
import ProductsContainer from '../../product/container';
import PageHeader from '../../page-header';
import { useLocale, useProducts, useSearchProducts } from '../../../hooks';
import { Content, Aside, LoadMoreButtonContainer } from './style';
import { Input, Checkbox, Button } from '../../ui';
// import { useFormik } from 'formik';
import { Wrapper } from '../../../styles';

export default function ShopView() {
  const { t } = useLocale();
  const { data: products, page, hasNextPage, fetchNextPage } = useProducts();
  const {
    search,
    data: searchProducts,
    isSearchActive,
    // tags,
    // selectedTags,
  } = useSearchProducts();
  // const { values, onChange, onSubmit } = useFormik({
  //   initialValues: {
  //     tags: [],
  //   },
  //   onSubmit(values) {
  //     console.log('values', values);
  //   },
  // });

  const productsToDisplay = isSearchActive ? searchProducts?.data : products;

  return (
    <Template>
      <PageHeader title={t('page.shop.title')} />
      <Wrapper>
        <Content>
          <Aside>
            <Input
              iconLeft='search'
              placeholder={t('page.shop.searchPlaceholder')}
              type='text'
              onChange={search}
            />
            {/* {JSON.stringify(selectedTags)}
          <div>
          {tags.map((tag) => (
              <Checkbox
              name='tags'
              key={tag}
              defaultChecked={values.tags.includes(tag)}
              value={tag}
              onChange={onChange}
              >
              {tag}
              </Checkbox>
              ))}
              <button onClick={onSubmit}>sub</button>
          </div> */}
          </Aside>
          <ProductsContainer products={productsToDisplay || []} />
          {hasNextPage && (
            <LoadMoreButtonContainer>
              <Button variant='primary' onClick={fetchNextPage}>
                {t('page.shop.loadMore')}
              </Button>
            </LoadMoreButtonContainer>
          )}
        </Content>
      </Wrapper>
    </Template>
  );
}
