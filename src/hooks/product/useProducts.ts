import type { AxiosResponse } from 'axios';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Product, ProductFromShopify } from 'src/types';
import { shopifyQuery, getProductFromShopifyProduct } from 'src/utils';

import { GET_PRODUCTS } from './queries';

const PAGE_SIZE = 16;

export const useProducts = () => {
  const [products, setProducts] = useState<(Product & { cursor: string })[]>(
    []
  );
  const [page, setPage] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [nextPageCursor, setNextPageCursor] = useState<string | null>(null);
  useQuery(
    ['getProducts', nextPageCursor],
    () => fetchProducts(PAGE_SIZE, nextPageCursor || undefined),
    {
      keepPreviousData: true,
      onSuccess(response) {
        setPage((currentPage) => currentPage + 1);
        setHasNextPage(response.meta.hasNextPage);
        setProducts((currentProducts) => [
          ...currentProducts,
          ...response.data,
        ]);
      },
    }
  );

  const fetchNextPage = () => {
    const lastItemCursor = products[products.length - 1].cursor;
    setNextPageCursor(lastItemCursor);
  };

  return { data: products, page, hasNextPage, fetchNextPage };
};

type FetchProductsResponse = {
  products: {
    pageInfo: {
      hasNextPage: boolean;
    };
    edges: {
      cursor: string;
      node: ProductFromShopify;
    }[];
  };
};

type ShopifyResponse = AxiosResponse<FetchProductsResponse>;

async function fetchProducts(pageSize: number, cursor?: string) {
  try {
    const response = await shopifyQuery<ShopifyResponse>({
      query: GET_PRODUCTS,
      variables: { pageSize, cursor },
    });
    const formattedData = getFormattedData(response.data.data);
    return formattedData;
  } catch (error: any) {
    throw Error(error.message);
  }
}

type GetFormattedDataReturn = {
  data: (Product & { cursor: string })[];
  meta: {
    hasNextPage: boolean;
  };
};

function getFormattedData({
  products,
}: FetchProductsResponse): GetFormattedDataReturn {
  return {
    data: products.edges.map((product) => ({
      cursor: product.cursor,
      ...getProductFromShopifyProduct({ product: product.node }),
    })),
    meta: {
      hasNextPage: products.pageInfo.hasNextPage,
    },
  };
}
