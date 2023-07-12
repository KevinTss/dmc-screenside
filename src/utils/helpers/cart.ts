const getTotalCartProductsLength = (data: any) =>
  data?.lines?.reduce((acc, curr) => {
    // console.log('curr', curr);
    return acc + (curr?.node?.quantity || 0);
  }, 0);

export const canGoToCheckout = (data: any) => {
  let ok = true;
  const totalProduct = getTotalCartProductsLength(data);

  if (totalProduct % 12 !== 0) {
    ok = false;
  }

  return {
    ok,
  };
};
