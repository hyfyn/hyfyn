import { css, Global } from "@emotion/react";
import emotionNormalize from "emotion-normalize";
const reset = css`
  ${emotionNormalize}
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  i {
    font-size: 0.5em;
    margin: 0.5em 0;
    font-weight: 100;
  }
  .display-flex {
    display: flex;
  }
`;

export const GlobalStyles = () => <Global styles={reset} />;
