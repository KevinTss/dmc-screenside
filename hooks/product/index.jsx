import { useQuery } from 'react-query';
import { useState, useEffect, useMemo } from 'react';
import debounce from 'lodash.debounce';

import { shopifyQuery } from '../../services/shopify-queries';
import {
  GET_PRODUCTS,
  GET_PRODUCT_BY_HANDLE,
  GET_PRODUCTS_BY_SEARCH,
  GET_FEATURED_PRODUCTS,
} from './queries';
import {
  getFormattedData,
  getProductDescription,
  getProductImage,
  getProductPrice,
  getQueryString,
  getVariantId,
  getFormattedSingleData,
} from './utils';
import { Tags } from '../../utils/constants';

const PAGE_SIZE = 16;

async function fetchProducts(pageSize, cursor) {
  try {
    const response = await shopifyQuery({
      query: GET_PRODUCTS,
      variables: { pageSize, cursor },
    });

    const result = response?.data?.data;
    const formattedData = getFormattedData(result);

    return formattedData;
  } catch (error) {
    throw Error(error.message);
  }
}

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [nextPageCursor, setNextPageCursor] = useState(null);
  const resp = useQuery(
    ['getProducts', nextPageCursor],
    () => fetchProducts(PAGE_SIZE, nextPageCursor),
    {
      keepPreviousData: true,
      onSuccess(response) {
        setPage(page + 1);
        setHasNextPage(response?.meta?.hasNextPage || false);
        setProducts([...products, ...response.data]);
      },
    }
  );

  const fetchNextPage = () => {
    const lastItemCursor = products[products.length - 1].cursor;
    setNextPageCursor(lastItemCursor);
  };

  return { data: products, page, hasNextPage, fetchNextPage };
};

export const useProduct = (handle) => {
  const { data, isLoading } = useQuery(
    ['getProduct', handle],
    async () => {
      try {
        const response = await shopifyQuery({
          query: GET_PRODUCT_BY_HANDLE,
          variables: { handle },
        });

        const product = response?.data?.data?.productByHandle;

        const formattedData = {
          id: product?.id,
          handle: product?.handle,
          title: product?.title,
          description: getProductDescription(product?.handle),
          imageUrl: getProductImage(product?.handle),
          price: getProductPrice(product),
          variantId: getVariantId(product),
        };

        return formattedData;
      } catch (error) {
        throw Error(error.message);
      }
    },
    {
      enabled: !!handle,
    }
  );

  return { data, isLoading };
};

export const useSearchProducts = () => {
  const [tags, setTags] = useState([]);
  const [search, setSearch] = useState('');
  const { data, isFetching, refetch } = useQuery(
    'getSearchProducts',
    async () => {
      try {
        const response = await shopifyQuery({
          query: GET_PRODUCTS_BY_SEARCH,
          variables: {
            search: getQueryString(search, tags),
          },
        });

        const formattedData = getFormattedData(response?.data?.data);

        return formattedData;
      } catch (error) {
        throw Error(error.message);
      }
    },
    {
      enabled: false,
    }
  );

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const debouncedResults = useMemo(() => debounce(handleChange, 300), []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  useEffect(() => {
    if (search || tags.length) {
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, tags]);

  return {
    data: isFetching ? [] : data,
    isLoading: isFetching,
    isSearchActive: !!search.length,
    search: debouncedResults,
    selectedTags: tags,
    tags: Object.values(Tags),
  };
};

export const useFeaturedProducts = () => {
  const { data, isFetching } = useQuery(
    'getFeaturedProducts',
    async () => {
      try {
        const response = await shopifyQuery({
          query: GET_FEATURED_PRODUCTS,
        });

        const formattedData = [
          getFormattedSingleData(response?.data?.data.one),
          getFormattedSingleData(response?.data?.data.two),
          getFormattedSingleData(response?.data?.data.three),
          getFormattedSingleData(response?.data?.data.four),
        ];

        return formattedData;
      } catch (error) {
        throw Error(error.message);
      }
    },
    {
      enabled: true,
    }
  );

  return {
    data: isFetching ? [] : data,
  };
};
