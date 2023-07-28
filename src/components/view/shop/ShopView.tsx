import { Content, Aside, LoadMoreButtonContainer } from './ShopView.styles';
import { PageHeader } from '../../../components/page-header';
import { ProductsList } from '../../../components/product-list';
import { DefaultTemplate } from '../../../components/template';
import { Button } from '../../../components/ui';
import { useLocale, useProducts } from '../../../hooks';


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
