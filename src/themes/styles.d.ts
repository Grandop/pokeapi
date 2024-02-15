import { colors } from "./colors";

declare module 'styled-components' {
  export interface DefaultTheme extends StyledDefaultTheme {
    colors: typeof colors;
  }
}