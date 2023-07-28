import { createContext, ReactNode, useCallback, useState, useMemo, useEffect, useRef } from 'react';

import { LocalCartProduct } from '../types'
import { addToLocalStorage, getFromLocalStorage } from '../utils';

type AddToCardFunc = (productHandle: string, productUnitPrice: number, productVariantId: string) => void
type RemoveFromCartFunc = (productHandle: string, options?: { all?: boolean }) => void

type AppState = {
  theme: 'light';
  isAsideCartOpen: boolean,
  productInCart: LocalCartProduct[]
};

type AppContextValue = {
  state: AppState
  toggleAsideCart: VoidFunction,
  addToCart: AddToCardFunc
  removeFromCart: RemoveFromCartFunc
}

const defaultValue: AppContextValue = {
  state: {
    theme: 'light',
    isAsideCartOpen: false,
    productInCart: []
  },
  toggleAsideCart: () => console.warn('toggleAsideCart not initialized'),
  addToCart: () => console.warn('addToCart not initialized'),
  removeFromCart: () => console.warn('removeFromCart not initialized'),
};

export const AppStateContext = createContext<AppContextValue>(defaultValue);

type AppStateProviderProps = {
  children: ReactNode;
};

export const AppStateProvider = ({ children }: AppStateProviderProps) => {
  const [state, setState] = useState<AppState>(defaultValue.state)

  useEffect(() => {
    const productsInCartFromLocalStorage = getFromLocalStorage('cart-local', { fallback: '[]' }) as LocalCartProduct[]
    if (productsInCartFromLocalStorage.length) {
      setState((oldState) => ({
        ...oldState,
        productInCart: productsInCartFromLocalStorage
      }))
    }
  }, [])

  const toggleAsideCart = useCallback(() => {
    setState(oldState => ({
      ...oldState,
      isAsideCartOpen: !oldState.isAsideCartOpen
    }))
  }, [])

  const addToCart: AddToCardFunc = useCallback((
    productHandle,
    productUnitPrice,
    productVariantId
  ) => {
    const itemIndex = state.productInCart.findIndex(p => p.handle === productHandle)

    let product: AppState['productInCart'][0] = itemIndex === -1
      ? {
        handle: productHandle,
        quantity: 1,
        pricePerUnit: productUnitPrice,
        variantId: productVariantId
      }
      : state.productInCart[itemIndex]

    if (itemIndex === -1) {
      setState(oldState => {
        const newState = {
          ...oldState,
          productInCart: [
            ...oldState.productInCart,
            product
          ]
        }
        addToLocalStorage('cart-local', newState.productInCart)
        return newState
      })
    } else {
      setState(oldState => {
        const newState = {
          ...oldState,
          productInCart: oldState.productInCart.map(i => {
            if (i.handle === product.handle) {
              return {
                handle: i.handle,
                quantity: i.quantity + 1,
                pricePerUnit: i.pricePerUnit,
                variantId: i.variantId
              }
            } else {
              return i
            }
          })
        }
        addToLocalStorage('cart-local', newState.productInCart)
        return newState
      })
    }
  }, [state.productInCart])

  const removeFromCart: RemoveFromCartFunc = useCallback((productHandle, options) => {
    const itemIndex = state.productInCart.findIndex(p => p.handle === productHandle)
    if (itemIndex === -1) return
    setState(oldState => {
      const newState = {
        ...oldState,
        productInCart: options?.all
          ? state.productInCart.filter(p => p.handle !== productHandle)
          : state.productInCart
            .map(p => p.handle === productHandle
              ? {
                handle: p.handle,
                quantity: p.quantity - 1,
                pricePerUnit: p.pricePerUnit,
                variantId: p.variantId
              }
              : p)
            .filter(p => p.quantity > 0)
      }
      addToLocalStorage('cart-local', newState.productInCart)
      return newState
    })
  }, [state.productInCart])

  const contextValue = useMemo(() => ({
    addToCart,
    removeFromCart,
    state,
    toggleAsideCart,
  }), [
    addToCart,
    removeFromCart,
    state,
    toggleAsideCart
  ])

  return (
    <AppStateContext.Provider value={contextValue}>
      {children}
    </AppStateContext.Provider>
  )
}
