import axios from 'axios';
import { useQuery } from 'react-query';

export const useProducts = () => {
  const { isLoading, isError, data, error } = useQuery(
    'getProducts',
    async () => {
      const resp = await axios({
        method: 'POST',
        url: 'https://beerify-test.myshopify.com/api/2021-10/graphql.json',
        headers: {
          'X-Shopify-Storefront-Access-Token':
            '7ca13d72d5138c8d30bac054839b7b4e',
        },
        data: {
          query:
            '{\nproducts(first:5) {\nedges {\nnode {\nid\nhandle\n}\n}\n}\n}',
          variables: {},
        },
      });

      return resp.data;
    }
  );

  return { isLoading, isError, data, error };
};
