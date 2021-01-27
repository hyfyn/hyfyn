import styled from "@emotion/styled";
import { css } from "@emotion/react";

// TODO add ability to pass dynamic grid layouts
export const Grid = styled.div(
  ({ theme }) => css`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: max-content;
    margin: 1rem;
  `
);
