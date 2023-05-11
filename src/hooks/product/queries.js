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

export const GET_PRODUCTS_BY_COLLECTION_V2 = `
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
          variants(first: 1) {
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
export const GET_PRODUCTS = `
query ($pageSize: Int, $cursor: String) {
  products(first: $pageSize, after: $cursor) {
    pageInfo {
      hasNextPage
    }
    edges {
      cursor
      node {
        handle
        title
        variants(first: 1) {
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
`;

export const GET_PRODUCT_BY_HANDLE = `
query getProductByHandle($handle: String!) {
  productByHandle(handle: $handle) {
    id
    handle
    title
    productType
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
`;

export const GET_PRODUCTS_BY_SEARCH = `
query ($search: String!) {
  products(first: 10, query: $search) {
    pageInfo {
      hasNextPage
    }
    edges{
      node{
        title
        handle
      }
    }
  }
}
`;

export const GET_FEATURED_PRODUCTS = `
query getFeaturedProducts {
  one: productByHandle(handle: "geuze-mariage-parfait-37-5cl") {
    id
    handle
    title
    variants(first: 1) {
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
  two: productByHandle(handle: "dipatout-double-ipa-33cl") {
    id
    handle
    title
    variants(first: 1) {
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
  three: productByHandle(handle: "cantillon-kriek-lambic-bio-75cl") {
    id
    handle
    title
    variants(first: 1) {
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
  four: productByHandle(handle: "bmx-ipa-33cl") {
    id
    handle
    title
    variants(first: 1) {
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
`;
