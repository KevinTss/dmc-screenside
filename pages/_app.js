import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';

import { GlobalStyles, lightTheme } from '../styles';
import '../styles/globals.css';

const queryClient = new QueryClient();

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={lightTheme}>
    <GlobalStyles />
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
