import type { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

import { GET_PRODUCT_BY_HANDLE } from './queries';
import { ProductFromShopify } from '../../types';
import { shopifyQuery, getProductFromShopifyProduct } from '../../utils';


type FetchProductResponse = {
  productByHandle: ProductFromShopify;
};

type ShopifyResponse = AxiosResponse<FetchProductResponse>;

export const useProduct = (handle: string) => {
  const { data, isLoading } = useQuery(
    ['getProduct', handle],
    async () => {
      try {
        const response = await shopifyQuery<ShopifyResponse>({
          query: GET_PRODUCT_BY_HANDLE,
          variables: { handle },
        });
        const product = response?.data?.data?.productByHandle;
        const formattedProduct = getProductFromShopifyProduct({ product });
        return formattedProduct;
      } catch (error: any) {
        throw Error(error.message);
      }
    },
    {
      enabled: !!handle,
    }
  );

  return { data, isLoading };
};
