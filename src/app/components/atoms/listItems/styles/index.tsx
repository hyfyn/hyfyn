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
      display: flex;
      justify-content: center;
      position: fixed;
      top: 0;
      width: 100%;
      background-color: ${theme.color.gold};
      padding: 1rem;
      li {
        padding: 0;
      }
      li a {
        color: ${theme.color.black};
        text-decoration: none;
        padding: 1rem;
        &:hover {
          background-color: ${theme.color.lightGold};
        }
        &.active {
          background-color: ${theme.color.white};
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
