import "@emotion/react";
import theme from "./theme"

type themeType = typeof theme
declare module "@emotion/react" {
  export interface Theme extends themeType {}
}
