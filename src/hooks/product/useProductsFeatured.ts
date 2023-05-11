

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
      getFormattedSingleData({
        id: 
      })
    ]
  };
};
