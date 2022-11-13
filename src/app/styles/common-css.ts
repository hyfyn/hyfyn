import { css, keyframes } from "@emotion/react";

export const linearGradient = (light: string, dark: string) => css`
  background: repeating-linear-gradient(
    to right,
    ${light},
    ${light} 80%,
    ${dark}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const growAnimation = keyframes`
  from {
    transform: scale(0)
  }
  50% {
    transform: scale(0.5));
  }

  100% {
    transform: scale(1)
  }
`;

export const slideAnimation = keyframes`
  from {
    height: 0;
    transform: translate3d(0, 50px, 0)
  }
  to {
    height: 100%;
    transform: translate3d(0, 0px, 0)
  }
`;

export const bounceAnimation = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }
  40%, 43% {
    transform: translate3d(0, -30px, 0)
  }
  70% {
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0, -4px, 0);
  }
`;
