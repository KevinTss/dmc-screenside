import type { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { ProductFromShopify } from 'src/types';
import {
  shopifyQuery,
  getProductImage,
  getProductFromShopifyProduct,
} from 'src/utils';

export const GET_FEATURED_PRODUCTS = `
query getFeaturedProducts {
  one: productByHandle(handle: "geuze-mariage-parfait-37-5cl") {
    handle
    title
    variants(first: 1) {
      edges {
        node {
          id
          priceV2 {
            amount
            currencyCode
          }
          compareAtPriceV2 {
            amount
            currencyCode
          }
        }
      }
    }
  }
  two: productByHandle(handle: "dipatout-double-ipa-33cl") {
    handle
    title
    variants(first: 1) {
      edges {
        node {
          id
          priceV2 {
            amount
            currencyCode
          }
          compareAtPriceV2 {
            amount
            currencyCode
          }
        }
      }
    }
  }
  three: productByHandle(handle: "cantillon-kriek-lambic-bio-75cl") {
    handle
    title
    variants(first: 1) {
      edges {
        node {
          id
          priceV2 {
            amount
            currencyCode
          }
          compareAtPriceV2 {
            amount
            currencyCode
          }
        }
      }
    }
  }
  four: productByHandle(handle: "bmx-ipa-33cl") {
    handle
    title
    variants(first: 1) {
      edges {
        node {
          id
          priceV2 {
            amount
            currencyCode
          }
          compareAtPriceV2 {
            amount
            currencyCode
          }
        }
      }
    }
  }
}
`;

type FetchProductsFeaturedResponse = {
  one: ProductFromShopify;
  two: ProductFromShopify;
  three: ProductFromShopify;
  four: ProductFromShopify;
};

type ShopifyResponse = AxiosResponse<FetchProductsFeaturedResponse>;

export const useProductsFeatured = () => {
  const { data, isFetching } = useQuery(
    'getFeaturedProducts',
    async () => {
      try {
        const response = await shopifyQuery<ShopifyResponse>({
          query: GET_FEATURED_PRODUCTS,
        });
        const formattedData = [
          getProductFromShopifyProduct({ product: response.data.data.one }),
          getProductFromShopifyProduct({ product: response.data.data.two }),
          getProductFromShopifyProduct({ product: response.data.data.three }),
          getProductFromShopifyProduct({ product: response.data.data.four }),
        ];
        return formattedData;
      } catch (error: any) {
        throw Error(error.message);
      }
    },
    {
      enabled: true,
    }
  );

  return {
    data: data || [],
    isLoading: isFetching,
  };
};
