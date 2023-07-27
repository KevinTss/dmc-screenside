/**
 * @see https://shopify.dev/docs/api/hydrogen-react/2023-04/utilities/storefront-api-types
 */
import type {
  CartInput,
  CartLineInput,
} from '@shopify/hydrogen-react/storefront-api-types';

export { CartInput, CartLineInput };

export type LocalCartProduct = {
  handle: string;
  quantity: number;
  pricePerUnit: number;
  variantId: string;
};
