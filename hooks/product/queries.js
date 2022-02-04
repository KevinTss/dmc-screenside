// export const GET_PRODUCTS = `
// {
//   products(first: 5) {
//     edges {
//       cursor
//       node {
//         handle
//         id
//         description
//         title
//         variants(first: 1) {
//           edges {
//             node {
//               id
//               currentlyNotInStock
//               priceV2 {
//                 amount
//                 currencyCode
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
// `;

export const GET_PRODUCTS_BY_COLLECTION = `
{
  collectionByHandle(handle: "frontpage") {
    products(first: 10, after: null) {
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
        node {
          handle
          title
          description
          images(first: 1) {
            edges {
              node {
                originalSrc
              }
            }
          }
          variants(first: 5) {
            edges {
              node {
                id
                priceV2 {
                  amount
                  currencyCode
                }
                compareAtPriceV2 {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
}
`;
