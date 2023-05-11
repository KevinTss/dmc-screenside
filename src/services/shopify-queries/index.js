import axios from 'axios';

export const shopifyQuery = ({ query, variables }) =>
  axios({
    method: 'POST',
    url: `https://${process.env.NEXT_PUBLIC_SHOPIFY_SHOP_NAME}.myshopify.com/api/2022-01/graphql.json`,
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token':
        process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    },
    data: { query, variables },
  });
