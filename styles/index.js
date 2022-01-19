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

  div#__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

// export const PageSection = styled.section`
//   max-width: 1200px;
//   border: 1px solid black;
//   margin: 40px 0;
//   display: flex;
//   flex-wrap: wrap;
// `;
