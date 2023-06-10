import { Spacing } from './theme.types';

const color = {
  // Neutral colors
  n: {
    0: '#FFFFFF',
    100: '#F8F8F8',
    200: '#EDEDED',
    300: '#E8E8E8',
    400: '#E2E2E2',
    500: '#DBDBDB',
    600: '#C7C7C7',
    700: '#8F8F8F',
    800: '#6F6F6F',
    900: '#171717',
  },
  // Primary colors
  p: {
    50: '#F1F8F5',
    100: '#DCEFE5',
    200: '#8FC6AF',
    300: '#5FA88C',
    400: '#3E8B70',
    500: '#2D6E59',
    600: '#245949',
    700: '#1E473A',
    800: '#1A3A31',
    900: '#16322C',
  },
  // Secondary colors
  s: {
    50: '#FCE1E3',
    100: '#DDBCC2',
    200: '#B9939B',
    300: '#986B74',
    400: '#804E5A',
    500: '#693140',
    600: '#5D2A38',
    700: '#4D1F2E',
    800: '#3D1525',
    900: '#2D091A',
  },
  // Typography colors
  t: {
    0: '#FFFFFF',
    100: '#F2F2F2',
    200: '#E9E9E9',
    300: '#D9D9D9',
    400: '#B6B6B6',
    500: '#969696',
    600: '#6D6D6D',
    700: '#5A5A5A',
    800: '#3B3B3B',
    900: '#1B1B1B',
  },
};

export const ThemeLight = {
  color: {
    transparent: 'rgba(255, 255, 255, 0)',
    neutral: color.n,
    primary: color.p,
    background: {
      main: '#FAF7F0',
      mainSoft: '#F1EEE5',
    },
  },
  font: {
    color: color.t,
    family: `'Outfit', sans-serif`,
    size: {
      16: '16px',
      18: '18px',
      20: '20px',
      24: '24px',
      48: '48px',
      96: '96px',
    },
    weight: {
      400: '400',
      500: '500',
      800: '800',
    },
  },
  space: Spacing,
};
