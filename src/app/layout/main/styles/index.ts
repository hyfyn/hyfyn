import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Main = styled.main(
  ({ theme }) => css`
    background-color: ${theme.color.black};
    min-height: 100vh;
    padding: 50px calc(5px + 2vmin);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(5px + 2vmin);
    color: ${theme.color.white};
  `
);
