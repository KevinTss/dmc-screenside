/**
 * TODO:
 * 1. Fix issue in console (dev terminal) when adding check age modal
 */
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CartProvider, AppStateProvider } from 'src/contexts';
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
