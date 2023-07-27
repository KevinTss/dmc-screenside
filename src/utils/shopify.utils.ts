import axios from 'axios';
import type { AxiosPromise, AxiosRequestConfig } from 'axios';

type ShopifyQueryResponse<T> = AxiosPromise<T>;

type ShopifyQueryParams = {
  query: string;
  variables?: any;
};

export const shopifyQuery = <T>(
  params: ShopifyQueryParams
): ShopifyQueryResponse<T> => {
  const { query, variables } = params;
  const config: AxiosRequestConfig = {
    method: 'POST',
    url: `https://${process.env.NEXT_PUBLIC_SHOPIFY_SHOP_NAME}.myshopify.com/api/2023-07/graphql.json`,
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token':
        process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    },
    data: { query, variables },
  };

  return axios(config);
};
