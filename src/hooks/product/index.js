// import debounce from 'lodash.debounce';
// import { useState, useEffect, useMemo } from 'react';
// import { useQuery } from 'react-query';
// import { shopifyQuery } from '../../utils/shopify.utils';

// import { GET_PRODUCTS_BY_SEARCH } from './queries';
// import { getFormattedData, getQueryString } from './utils.js';

// import { Tags } from '../../utils/constants';

export * from './useProduct';
export * from './useProducts';
export * from './useProductsFeatured';

// export const useSearchProducts = () => {
//   const [tags, setTags] = useState([]);
//   const [search, setSearch] = useState('');
//   const { data, isFetching, refetch } = useQuery(
//     'getSearchProducts',
//     async () => {
//       try {
//         const response = await shopifyQuery({
//           query: GET_PRODUCTS_BY_SEARCH,
//           variables: {
//             search: getQueryString(search, tags),
//           },
//         });

//         const formattedData = getFormattedData(response?.data?.data);

//         return formattedData;
//       } catch (error) {
//         throw Error(error.message);
//       }
//     },
//     {
//       enabled: false,
//     }
//   );

//   const handleChange = (e) => {
//     setSearch(e.target.value);
//   };
//   const debouncedResults = useMemo(() => debounce(handleChange, 300), []);

//   useEffect(() => {
//     return () => {
//       debouncedResults.cancel();
//     };
//   });

//   useEffect(() => {
//     if (search || tags.length) {
//       refetch();
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [search, tags]);

//   return {
//     data: isFetching ? [] : data,
//     isLoading: isFetching,
//     isSearchActive: !!search.length,
//     search: debouncedResults,
//     selectedTags: tags,
//     tags: Object.values(Tags),
//   };
// };
