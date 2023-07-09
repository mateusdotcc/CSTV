import 'styled-components/native';
import { myTheme } from '@themes/index';

declare module 'styled-components/native' {
  type ThemeType = typeof myTheme;
  export interface DefaultTheme extends ThemeType {}
}
