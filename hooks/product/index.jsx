import { useQuery } from 'react-query';
import { useState, useEffect, useMemo } from 'react';
import debounce from 'lodash.debounce';

import { shopifyQuery } from '../../services/shopify-queries';
import {
  GET_PRODUCTS_BY_COLLECTION_V2,
  GET_PRODUCT_BY_HANDLE,
  GET_PRODUCTS_BY_SEARCH,
} from './queries';
import {
  getProductPrice,
  getVariantId,
  getProductImage,
  getProductDescription,
  getFormattedData,
} from './utils';

export const useProducts = () => {
  const { data } = useQuery('getProducts', async () => {
    try {
      const response = await shopifyQuery({
        query: GET_PRODUCTS_BY_COLLECTION_V2,
        variables: {},
      });

      const collection = response?.data?.data?.collectionByHandle;
      const formattedData = getFormattedData(collection);

      return formattedData;
    } catch (error) {
      throw Error(error.message);
    }
  });

  return { data };
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
  const [search, setSearch] = useState('');
  const { data, isFetching, refetch } = useQuery(
    'getSearchProducts',
    async () => {
      try {
        const response = await shopifyQuery({
          query: GET_PRODUCTS_BY_SEARCH,
          variables: {
            search: `title:*${search.trim()}*`,
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
    if (search) {
      refetch();
    }
  }, [search]);

  return {
    data,
    search: debouncedResults,
    isLoading: isFetching,
    isSearchActive: !!search.length,
  };
};
