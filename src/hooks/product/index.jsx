import debounce from 'lodash.debounce';
import { useState, useEffect, useMemo } from 'react';
import { useQuery } from 'react-query';
import { shopifyQuery } from 'src/utils/shopify.utils';

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
} from './utils.js';
import { Tags } from '../../utils/constants';

export * from './useProducts';

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
