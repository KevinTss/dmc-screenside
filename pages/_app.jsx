import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';

import { GlobalStyles, lightTheme } from '../styles';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={lightTheme}>
    <GlobalStyles />
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
