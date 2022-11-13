import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { bounceAnimation } from "app/styles/common-css";

export const ScrollIndicator = styled.div(
  ({ theme }) => css`
    position: absolute;
    left: 50%;
    bottom: 10%;
    text-align: center;
    margin-bottom: 6px;
    height: 5px;
    width: 20px;
    animation: ${bounceAnimation} 3s ease infinite;
    opacity: 0;
    transition: opacity 1s ease;
    &.display {
      opacity: 0.5;
    }
    :before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 50%;
      background: ${theme.color.lightGold};
      transform: skew(0deg, 45deg);
    }
    :after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 50%;
      background: ${theme.color.lightGold};
      transform: skew(0deg, -45deg);
    }
  `
);