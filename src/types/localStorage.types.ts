export type LocalStorageKey =
  /**
   * Cart local mean the cart without any interactions to Shopify
   */
  | 'cart-local'
  /**
   * Cart remote mean that is the cart from Shopify server
   */
  | 'cart-remote';
