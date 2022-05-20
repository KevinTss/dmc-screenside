import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import TagManager from 'react-gtm-module';
import { GlobalStyles, lightTheme } from '../styles';
import { CartProvider } from '../contexts';
import { useEffect } from 'react';

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

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
