import styled from "@emotion/styled";
import { css } from "@emotion/react";

type GridProps = {
  columns?: number;
  displayType: 'grid' | 'flex';
}
// TODO add ability to pass dynamic grid layouts
export const Grid = styled.div<GridProps>(
  ({ theme, columns, displayType }) => css`
    
    ${displayType === 'grid' && css`
      display: grid;
      grid-template-columns: repeat(${columns}, 1fr);
      column-gap: 1em;
      row-gap: 1em;
    `}
    ${displayType === 'flex' && css`
      display: flex;
      flex: 1;
      align-items: center;
      * {
        margin-left: 1em;
      }
    `}

  `
);
