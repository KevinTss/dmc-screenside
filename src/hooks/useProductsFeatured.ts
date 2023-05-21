import { getProductImage } from 'src/utils';

export const useProductsFeatured = () => {
  // const { data, isFetching } = useQuery(
  //   'getFeaturedProducts',
  //   async () => {
  //     try {
  //       const response = await shopifyQuery({
  //         query: GET_FEATURED_PRODUCTS,
  //       });

  //       const formattedData = [
  //         getFormattedSingleData(response?.data?.data.one),
  //         getFormattedSingleData(response?.data?.data.two),
  //         getFormattedSingleData(response?.data?.data.three),
  //         getFormattedSingleData(response?.data?.data.four),
  //       ];

  //       return formattedData;
  //     } catch (error) {
  //       throw Error(error.message);
  //     }
  //   },
  //   {
  //     enabled: true,
  //   }
  // );

  return {
    data: [
      {
        id: '1',
        title: 'Geuze Mariage Parfait 37,5cl',
        handle: 'achel-blonde-33cl',
        imageUrl: getProductImage('achel-blonde-33cl'),
        price: 12,
        variantId: '1',
      },
      {
        id: '2',
        title: 'Geuze Mariage Parfait 37,5cl',
        handle: 'achel-blonde-33cl',
        imageUrl: getProductImage('achel-blonde-33cl'),
        price: 12,
        variantId: '1',
      },
      {
        id: '3',
        title: 'Geuze Mariage Parfait 37,5cl',
        handle: 'achel-blonde-33cl',
        imageUrl: getProductImage('achel-blonde-33cl'),
        price: 12,
        variantId: '1',
      },
      {
        id: '4',
        title: 'Geuze Mariage Parfait 37,5cl',
        handle: 'achel-blonde-33cl',
        imageUrl: getProductImage('achel-blonde-33cl'),
        price: 12,
        variantId: '1',
      },
    ],
  };
};
