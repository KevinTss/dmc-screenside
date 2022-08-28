export const useAgeChecking = () => {
  if (typeof window === 'undefined') return null

  return {
    isAsked: window?.localStorage?.getItem('isAgeCheckAsked') === 'true',
    check: () => window.localStorage.setItem('isAgeCheckAsked', 'true')
  }
}
