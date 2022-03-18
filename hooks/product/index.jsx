import { useQuery } from 'react-query';

import { shopifyQuery } from '../../services/shopify-queries';
import {
  GET_PRODUCTS_BY_COLLECTION_V2,
  GET_PRODUCT_BY_HANDLE,
} from './queries';
import {
  getProductPrice,
  getVariantId,
  getProductImage,
  getProductDescription,
} from './utils';

export const useProducts = () => {
  const { data } = useQuery('getProducts', async () => {
    try {
      const response = await shopifyQuery({
        query: GET_PRODUCTS_BY_COLLECTION_V2,
        variables: {},
      });

      const collection = response?.data?.data?.collectionByHandle;

      const formattedData = {
        data: collection?.products?.edges.map((product) => ({
          cursor: product.cursor,
          title: product.node.title,
          handle: product.node.handle,
          imageUrl: getProductImage(product.node.handle),
          price: getProductPrice(product.node),
          variantId: getVariantId(product.node),
        })),
        meta: {
          hasNextPage: collection?.products?.pageInfo.hasNextPage,
        },
      };

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
