import { createContext, ReactNode } from 'react';

type AppState = {
  theme: 'light';
};

const defaultValue: AppState = {
  theme: 'light',
};

export const AppStateContext = createContext<AppState>(defaultValue);

type AppStateProviderProps = {
  children: ReactNode;
};

export const AppStateProvider = ({ children }: AppStateProviderProps) => (
  <AppStateContext.Provider value={defaultValue}>
    {children}
  </AppStateContext.Provider>
);
