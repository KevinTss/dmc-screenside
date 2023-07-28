import type { AxiosResponse } from 'axios';
import { useMutation } from 'react-query';

import type { CartInput, CartLineInput } from '../types';
import { shopifyQuery } from '../utils/shopify.utils';

/**
 * @see https://shopify.dev/docs/api/storefront/2023-04/mutations/cartCreate#top
 * @see https://shopify.dev/docs/custom-storefronts/building-with-the-storefront-api/cart/manage#step-1-create-a-cart-and-add-a-line-item
 */
const CREATE_CART = `
  mutation createCart($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id
        checkoutUrl
      }
      userErrors {
        field
        message
      }
    }
  }
`;

type MutationData = AxiosResponse<{
  data: {
    cartCreate: {
      cart: {
        id: string;
        checkoutUrl: string;
      };
      userErrors: {
        field: any;
        message: string;
      }[];
    };
  };
}>;
type MutationError = any;
type MutationVariables = { input: CartInput };
type MutationContext = unknown;

type UseShopifyCartCreateParams = {
  onSuccess: (cardId: string, checkoutUrl: string) => void;
};

export const useShopifyCartCreate = ({
  onSuccess,
}: UseShopifyCartCreateParams) => {
  const { mutate, isLoading } = useMutation<
    MutationData,
    MutationError,
    MutationVariables,
    MutationContext
  >(
    ({ input }) =>
      shopifyQuery({
        query: CREATE_CART,
        variables: {
          input,
        },
      }),
    {
      onSuccess(response) {
        const { id, checkoutUrl } = response.data.data.cartCreate.cart;
        onSuccess(id, checkoutUrl);
      },
      onError(response) {
        console.warn('error', response);
      },
    }
  );

  const create = (lines: CartLineInput[]) => {
    const createCartInput: MutationVariables['input'] = {
      lines,
    };
    mutate({ input: createCartInput });
  };

  return { create, isLoading };
};
