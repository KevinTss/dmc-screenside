import { createContext, ReactNode, useCallback, useState } from 'react';

type AppState = {
  theme: 'light';
  isAsideCartOpen: boolean,
  productInCart: {
    handle: string,
    quantity: number
  }[]
};

type AppContextValue = {
  state: AppState,
  toggleAsideCart: VoidFunction,
  addToCart: (productHandle: string) => void
}

const defaultValue: AppContextValue = {
  state: {
    theme: 'light',
    isAsideCartOpen: false,
    productInCart: []
  },
  toggleAsideCart: () => console.warn('toggleAsideCart not initialized'),
  addToCart: () => console.warn('addToCart not initialized'),
};

export const AppStateContext = createContext<AppContextValue>(defaultValue);

type AppStateProviderProps = {
  children: ReactNode;
};

export const AppStateProvider = ({ children }: AppStateProviderProps) => {
  const [state, setState] = useState<AppState>(defaultValue.state)

  const toggleAsideCart = useCallback(() => {
    setState(oldState => ({
      ...oldState,
      isAsideCartOpen: !oldState.isAsideCartOpen
    }))
  }, [])

  const addToCart = useCallback((productHandle: string) => {
    const itemIndex = state.productInCart.findIndex(p => p.handle === productHandle)

    let product: AppState['productInCart'][0] = itemIndex === -1
      ? {
        handle: productHandle,
        quantity: 1
      }
      : state.productInCart[itemIndex]

    if (itemIndex === -1) {
      setState(oldState => {
        return {
          ...oldState,
          productInCart: [
            ...oldState.productInCart,
            product
          ]
        }
      })
    } else {
      setState(oldState => {
        return {
          ...oldState,
          productInCart: oldState.productInCart.map(i => {
            if (i.handle === product.handle) {
              return {
                handle: i.handle,
                quantity: i.quantity + 1
              }
            } else {
              return i
            }
          })
        }
      })
    }
  }, [state.productInCart])

  const contextValue = {
    state,
    toggleAsideCart,
    addToCart
  }

  return (
    <AppStateContext.Provider value={contextValue}>
      {children}
    </AppStateContext.Provider>
  )
}
