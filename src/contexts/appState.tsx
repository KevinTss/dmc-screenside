import { createContext, ReactNode, useCallback, useState } from 'react';

type AppState = {
  theme: 'light';
  isAsideCartOpen: boolean
};

type AppContextValue = {
  state: AppState,
  toggleAsideCart: VoidFunction
}

const defaultValue: AppContextValue = {
  state: {
    theme: 'light',
    isAsideCartOpen: false,
  },
  toggleAsideCart: () => console.warn('toggleAsideCart not initialized')
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

  const contextValue = {
    state,
    toggleAsideCart
  }

  return (
    <AppStateContext.Provider value={contextValue}>
      {children}
    </AppStateContext.Provider>
  )
}
