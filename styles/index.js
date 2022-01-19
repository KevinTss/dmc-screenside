import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  color: {
    primary: '#24262f',
    background: '#f7f7f7',
  },
};

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
  }

  body {
    font-family: sans-serif;
  }
`;
