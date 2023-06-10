import type { AxiosResponse } from 'axios';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Product } from 'src/types';
import {
  shopifyQuery,
  getProductImage,
  getProductPrice,
  getVariantId,
} from 'src/utils';

import { GET_PRODUCTS } from './queries';

const PAGE_SIZE = 16;

export const useProducts = () => {
  const [products, setProducts] = useState<(Product & { cursor: string })[]>(
    []
  );
  const [page, setPage] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [nextPageCursor, setNextPageCursor] = useState<string | null>(null);
  const resp = useQuery(
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

type FetchProductResponse = {
  products: {
    pageInfo: {
      hasNextPage: boolean;
    };
    edges: {
      cursor: string;
      node: {
        handle: string;
        title: string;
        variants: {
          edges: {
            node: {
              id: string;
              compareAtPriceV2: {
                amount: string;
                currencyCode: string;
              };
              priceV2: {
                amount: string;
                currencyCode: string;
              };
            };
          }[];
        };
      };
    }[];
  };
};

type ShopifyResponse = AxiosResponse<FetchProductResponse>;

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
}: FetchProductResponse): GetFormattedDataReturn {
  return {
    data: products.edges.map((product) => ({
      cursor: product.cursor,
      title: product.node.title,
      handle: product.node.handle,
      imageUrl: getProductImage(product.node.handle),
      price: getProductPrice(product.node),
      variantId: getVariantId(product.node),
    })),
    meta: {
      hasNextPage: products.pageInfo.hasNextPage,
    },
  };
}
