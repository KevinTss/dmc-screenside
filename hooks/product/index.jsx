import { useQuery } from 'react-query';

import { shopifyQuery } from '../../services/shopify-queries';
import { GET_PRODUCTS_BY_COLLECTION, GET_PRODUCT_BY_HANDLE } from './queries';
import { getProductPrice, getVariantId, getProductImage } from './utils';

export const useProducts = () => {
  const { data } = useQuery('getProducts', async () => {
    try {
      const response = await shopifyQuery({
        query: GET_PRODUCTS_BY_COLLECTION,
        variables: {},
      });

      const collection = response?.data?.data?.collectionByHandle;

      const formattedData = {
        data: collection?.products?.edges.map((product) => ({
          cursor: product.cursor,
          title: product.node.title,
          handle: product.node.handle,
          description: product.node.description,
          imageUrl: getProductImage(product.node),
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
          description: product?.description,
          imageUrl: getProductImage(product),
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
