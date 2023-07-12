import { LocalStorageKey } from 'src/types/LocalStorage';

export const addToLocalStorage = (key: LocalStorageKey, value: any): void => {
  // if (typeof window === 'undefined') return;
  // if (window?.localStorage === undefined) return;

  window.localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (
  key: LocalStorageKey,
  options?: { fallback?: string }
): any => {
  if (typeof window === 'undefined' || window?.localStorage === undefined)
    return JSON.parse(options?.fallback || '{}');

  return JSON.parse(
    window.localStorage.getItem(key) || options?.fallback || '{}'
  );
};
