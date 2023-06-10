import { PageHeader } from 'src/components/page-header';
import { ProductsList } from 'src/components/product-list';
import { DefaultTemplate } from 'src/components/template';
import { Button } from 'src/components/ui';
import { useLocale, useProducts } from 'src/hooks';

import { Content, Aside, LoadMoreButtonContainer } from './ShopView.styles';

export const ShopView = () => {
  const { t } = useLocale();
  const { data: products, page, hasNextPage, fetchNextPage } = useProducts();
  // const {
  //   search,
  //   data: searchProducts,
  //   isSearchActive,
  //   // tags,
  //   // selectedTags,
  // } = useSearchProducts();
  // const { values, onChange, onSubmit } = useFormik({
  //   initialValues: {
  //     tags: [],
  //   },
  //   onSubmit(values) {
  //     console.log('values', values);
  //   },
  // });

  // const productsToDisplay = isSearchActive ? searchProducts?.data : products;

  return (
    <DefaultTemplate>
      <PageHeader title={t('component.ShopView.title')} />
      <Content>
        <Aside>
          {/* <Input
            iconLeft='search'
            placeholder={t('page.shop.searchPlaceholder')}
            type='text'
            onChange={search}
          /> */}
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
        <ProductsList products={products} />
        {hasNextPage && (
          <LoadMoreButtonContainer>
            <Button onClick={fetchNextPage}>
              {t('component.ShopView.loadMore')}
            </Button>
          </LoadMoreButtonContainer>
        )}
      </Content>
    </DefaultTemplate>
  );
}
