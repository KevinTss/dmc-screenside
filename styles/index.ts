import styled, { createGlobalStyle } from 'styled-components';

export * from './theme';
export * from './theme.constants';
import { MediaQuery } from '../utils';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
  }

  body {
    font-family: ${({ theme }) => theme.font.family};
  }

  div#__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

export const Wrapper = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: auto;
  padding: 0 ${({ theme }) => theme.space.S16};
`;

export const Section = styled.section`
  max-width: 1440px;
  width: 100%;
  margin: auto;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  ${MediaQuery.S_AND_DOWN} {
    flex-direction: column;
  }
`;
