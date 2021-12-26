import styled, { createGlobalStyle } from 'styled-components';
export const lightTheme = {
  body: '#fffff',
  main: '#5C14DB',
  mainColor: '#FFFFFF',
  accent: '#E5DE17',
  accentColor: '#161616',
  secondary: '#FFFFFF',
  secondaryColor: '#343434',
  dullColor: '#343434',
  ternary: '#000000',
  codeColor: '#D121C5',
};
export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: sans-serif !important;
    font-weight: 400;
    font-style: normal;
    transition: all 0.50s linear;
  }
  input, textarea, button {font-family: inherit}
`;
export const PrimaryContainer = styled.div`
  background: ${(props) => props.theme.main};
  color: ${(props) => props.theme.mainColor};
  display: flex;
  flex-direction: column;
`;

/* <Row justifyContent='center' alignItems='center' reverse mobile/> */
export const Row = styled.div.attrs((props) => {
  const direction = props.mobile ? 'column' : 'row';
  const justifyContent = props.justifyContent ?? 'start';
  const alignItems = props.alignItems ?? 'start';
  const reverse = props.reverse;
  return {
    direction: `${direction + (reverse ? '-reverse' : '')}`,
    justifyContent,
    alignItems,
  };
})`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;
