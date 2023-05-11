export const isAgeChecked = () =>
  typeof window !== 'undefined'
    ? window?.localStorage?.getItem('isAgeCheckAsked') === 'true'
    : false;

export const checkAge = () =>
  window.localStorage.setItem('isAgeCheckAsked', 'true');
