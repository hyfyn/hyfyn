import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Button = styled.button(({theme}) => css`
  background-color: transparent;
  border: none;
  color: ${theme.color.gold};
  appearance: none;
  font-size: 1rem;
  :hover {
    cursor: pointer;
  }
`)