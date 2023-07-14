import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Controls = styled.div(
  ({ theme }) => css`
    input {
      display: block;
    }
    button {
      appearance: none;
      color: ${theme.color.space};
      background-color: ${theme.color.white};
      border: 2px solid ${theme.color.gold};
      border-radius: 10px;
      font-size: ${+theme.padding.base / 8}rem;
      margin: ${+theme.padding.base / 8}rem 0 ${+theme.padding.base / 8}rem 0;
      &:hover {
        cursor: pointer;
        background-color: ${theme.color.gold};
      }
    }
  `
);

export const Canvas = styled.canvas(
  ({ theme }) => css`
    border: 2px solid white;
  `
);
