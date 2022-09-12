import styled from "@emotion/styled";
import { css } from "@emotion/react";

type CardContent = {
  border?: boolean
}
export const Card = styled.div<CardContent>(
  ({ theme, border }) => css`
    padding: ${theme.padding.base}px 0;
    margin-top: 1em;
    ${border ? borderBase(theme.color.white) : null}
    a {
      color: ${theme.color.white};
      text-decoration: none;
      transition: color ${theme.transition.base};
      &:hover {
        color: ${theme.color.gold};
      }
    }
  `
);

export const CardTitle = styled.div(
  ({ theme }) => css`
    text-align: left;
    border-bottom: 2px ${theme.color.gold} solid;
    padding-bottom: 0.5rem;
  `
);

const borderBase = (color: string) => css`
   border: 3px solid ${color};
   padding: 1em;
   border-radius: 10px;
`
export const CardContent = styled.div<CardContent>(({theme, border}) => css`
    ${border ? borderBase(theme.color.white) : null}
`)