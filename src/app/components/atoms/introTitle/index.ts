import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { linearGradient, growAnimation, slideAnimation } from "app/styles/common-css";

export const IntroTitle = styled.h1(
  ({ theme }) => css`
    position: absolute;
    font-size: 4em;
    animation: ${growAnimation} 1s ease;
    ${linearGradient(theme.color.white, theme.color.black)}
    span {
      position: absolute;
      bottom: -0.66em;
      left: 0.25em;
      animation: ${slideAnimation} 3s ease;
      color: ${theme.color.gold};
      ${linearGradient(theme.color.gold, theme.color.black)}
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `
);