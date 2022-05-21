export const isSSR = typeof window === 'undefined';

export const canGoToCheckout = (data) => {
  // console.log('data', data);
  let ok = true;
  const totalProduct = data?.lines?.reduce?.((acc, curr) => {
    // console.log('curr', curr);
    return acc + (curr?.node?.quantity || 0);
  }, 0);

  if (totalProduct % 12 !== 0) {
    ok = false;
  }

  // console.log('total product', totalProduct);
  // console.log('ok', ok);

  return {
    ok,
  };
};
