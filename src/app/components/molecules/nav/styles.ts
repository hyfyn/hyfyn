import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const FixedContainer = styled.div(
  ({ theme }) => css`
    position: relative;
    flex: 0;
    transition: flex ease 0.2s;
    background-color: ${theme.color.black};
    border-right: 0px solid ${theme.color.gold};
    &.open {
      max-width: 150px;
      border-right-width: 1px;
      flex: 1;
    }
  `
);
export const StyledNav = styled.nav(
  ({ theme }) => css`
    position: fixed;

    z-index: 99;
    width: 0;
    canvas {
      background-color: ${theme.color.black};
      cursor: pointer;
    }

    div.nav_slide {
      position: relative;
      right: 100vw;
      transition: right 0.3s ease;
      &.open {
        right: 0;
        .nav_items {
          opacity: 1;
        }
      }
    }
    .nav_items {
      padding-left: 0;
      opacity: 0;
      transition: opacity 1s ease;
      li {
        display: block;
      }
      li a {
        color: ${theme.color.white};
        display: block;
        padding: 1rem 0.5rem;
        text-decoration: none;
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
