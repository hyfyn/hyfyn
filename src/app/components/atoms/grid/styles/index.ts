import styled from "@emotion/styled";
import { css } from "@emotion/react";

type GridProps = {
  columns: number;
}
// TODO add ability to pass dynamic grid layouts
export const Grid = styled.div<GridProps>(
  ({ theme, columns }) => css`
    display: grid;
    grid-template-columns: repeat(${columns}, 1fr);
    column-gap: 1em;
    row-gap: 1em;
  `
);
