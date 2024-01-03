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
