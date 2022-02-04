import { useQuery } from 'react-query';

import { shopifyQuery } from '../../services/shopify-queries';
import { GET_PRODUCTS_BY_COLLECTION } from './queries';
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
          description: product.node.description,
          imageUrl: getProductImage(product),
          price: getProductPrice(product),
          variantId: getVariantId(product),
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
