import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Card = styled.div(
  ({ theme }) => css`
    padding: ${theme.padding.base}px 0;
  `
);

export const CardTitle = styled.div(
  ({ theme }) => css`
    text-align: left;
    border-bottom: 2px ${theme.color.gold} solid;
    padding-bottom: 0.5rem;
    & > a {
      color: ${theme.color.white};
      text-decoration: none;
      transition: color ${theme.transition.base};
      &:hover {
        color: ${theme.color.gold};
      }
    }
  `
);
