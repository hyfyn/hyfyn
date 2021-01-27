import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      gold: string;
      lightGold: string;
      white: string;
      black: string;
    };
    padding: {
      base: string;
    };
    transition: {
      slow: string;
      fast: string;
      base: string;
    };
  }
}
