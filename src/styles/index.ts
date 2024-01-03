import { MediaQuery } from 'src/constants';
import styled, { createGlobalStyle, css } from 'styled-components';

export * from './theme';
export * from './theme.constants';
import { resetCSS } from './reset.styles';

export const GlobalStyles = createGlobalStyle`
 ${resetCSS}

  body {
    font-family: ${({ theme }) => theme.font.family};
    background: ${(p) => p.theme.color.background.main};
  }

  div#__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

export const SectionCSS = css`
  max-width: 1240px;
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space.S16}px;
  display: flex;
  flex-direction: column;
  gap: 42px;
  box-sizing: border-box;
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

  ${MediaQuery.M_AND_DOWN} {
    flex-direction: column;
  }
`;
