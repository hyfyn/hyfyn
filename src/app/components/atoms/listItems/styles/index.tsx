import styled from "@emotion/styled";
import { css } from "@emotion/react";

const styles = css`
  list-style: none;
  margin: 0;
  li {
    display: inline;
  }
`;

const UList = styled.ul(
  ({ theme }) => css`
    ${styles}
    background-color: ${theme.color.gold};
    &.nav {
      display: flex;
      justify-content: center;
      position: fixed;
      top: 0;
      width: 100%;
      background-color: ${theme.color.gold};
      padding: 1rem;
      li a {
        color: ${theme.color.black};
        text-decoration: none;
        padding: 1rem;
        &:hover {
          background-color: ${theme.color.lightGold};
        }
        &.active {
          background-color: white;
          color: black;
        }
      }
    }
  `
);

const DList = styled.dl(
  ({ theme }) => css`
    ${styles}
  `
);
export { UList, DList };
