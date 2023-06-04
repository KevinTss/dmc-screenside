import 'styled-components';
import type { ThemeLight } from './src/styles';

type Theme = typeof ThemeLight;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}