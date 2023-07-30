/**
 * TODO:
 * 1. Fix issue in console (dev terminal) when adding check age modal
 */
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CartProvider, AppStateProvider } from 'src/contexts';
import { LocalesProvider } from 'src/locales'
import { GlobalStyles, ThemeLight } from 'src/styles';
import { ThemeProvider } from 'styled-components';

// import { AgeCheckingModal } from '../components/age-checking-modal';

const tagManagerArgs = {
  gtmId: 'GTM-K5X79WJ',
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <ThemeProvider theme={ThemeLight}>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <LocalesProvider>
            <AppStateProvider>
              <Component {...pageProps} />
            </AppStateProvider>
          </LocalesProvider>
        </CartProvider>
      </QueryClientProvider>
      {/* <AgeCheckingModal /> */}
    </ThemeProvider>
  );
};

export default App
