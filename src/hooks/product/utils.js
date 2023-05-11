export const getFormattedData = (response) => {
  return {
    data: response?.products?.edges.map((product) => ({
      cursor: product.cursor,
      title: product.node.title,
      handle: product.node.handle,
      imageUrl: getProductImage(product.node.handle),
      price: getProductPrice(product.node),
      variantId: getVariantId(product.node),
    })),
    meta: {
      hasNextPage: response?.products?.pageInfo.hasNextPage,
    },
  };
};

export const getQueryString = (search, tags) => {
  let result = '';

  if (search) {
    result += `title:*${search.trim()}*`;
  }

  if (tags.length) {
    let additionalQueryString = '';

    if (result.length) {
      additionalQueryString += ' AND ';
    }

    additionalQueryString += tags.reduce((acc, curr) => {
      if (acc.length) {
        return ` AND tag:${curr}`;
      }
      return '';
    }, '');
  }

  return result;
};
