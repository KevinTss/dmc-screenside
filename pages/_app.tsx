/**
 * TODO:
 * 1. Fix issue in console (dev terminal) when adding check age modal
 */
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import TagManager from 'react-gtm-module';
import { GlobalStyles, ThemeLight } from '../styles';
import { CartProvider, AppStateProvider } from '../contexts';
import { useEffect } from 'react';
// import { AgeCheckingModal } from '../components/age-checking-modal';
import { AppProps } from 'next/app';

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
    <AppStateProvider>
      <ThemeProvider theme={ThemeLight}>
        <GlobalStyles />
        <QueryClientProvider client={queryClient}>
          <CartProvider>
            <Component {...pageProps} />
          </CartProvider>
        </QueryClientProvider>
        {/* <AgeCheckingModal /> */}
      </ThemeProvider>
    </AppStateProvider>
  );
};

export default App;
