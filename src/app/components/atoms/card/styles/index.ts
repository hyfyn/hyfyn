import styled from "@emotion/styled";
import { css } from "@emotion/react";

type CardContent = {
  border?: boolean
}

const borderBase = (color: string) => css`
   border: 3px solid ${color};
   border-radius: 10px;
  `
export const Card = styled.div<CardContent>(
  ({ theme, border }) => css`
    margin: 1em 0 0;
    ${border ? borderBase(theme.color.white) : null}
    a {
      color: ${theme.color.white};
      text-decoration: none;
      transition: color ${theme.transition.base};
      &:hover {
        color: ${theme.color.gold};
      }
    }
    h4,
    h5 {
      margin: 0rem 1rem 0rem 1rem;
    }
    h4 {
      margin-top: 1rem;
    }
    &:hover {
      ${border ? borderBase(theme.color.gold) : null}
      img{
        transform: scale(1.1);
      }
    }
  `
);

export const CardContent = styled.figure<CardContent>(({theme, border}) => css`
    ${border ? borderBase(theme.color.white) : null}
    padding: 1rem 0;
    margin: 0;
   figcaption {
    margin: 1rem 1rem;
    font-size: 0.7em;
    font-weight: 100;
   }
   img {
    transition: transform ease 0.5s;
   }
`)