import styled from "@emotion/styled";
import { css } from "@emotion/react";

const base = css`
  list-style: none;
  margin: 0;
  li {
    display: inline;
    padding: 0.5rem;
  }
`;

const UList = styled.ul(
  base,
  ({ theme }) => css`
    &.nav {
      position: fixed;
      top: 0;
      padding: 1rem;
      border-right: ${theme.color.gold} solid 1px;
      /* min-height: 100vh; */
      background-color: ${theme.color.black};
      width: 100%;
      border-bottom: ${theme.color.white} solid 1px;
      z-index: 100;
      li {
        border-bottom: ${theme.color.white} solid 1px;
        padding: 1rem 2rem;
        &:last-child {
          border: none;
        }
      }
      li a {
        color: ${theme.color.white};
        text-decoration: none;
        padding: 1rem;
        &:hover {
          color: ${theme.color.lightGold};
        }
        &.active {
          color: ${theme.color.gold};
        }
      }
    }
  `
);

const DList = styled.dl(base, ({ theme }) => css``);

const OList = styled.ol(
  ({ theme }) => css`
    li {
      text-align: left;
      text-transform: capitalize;
    }
  `
);

export { OList, DList, UList };
