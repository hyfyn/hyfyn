import styled from "@emotion/styled";
import { css } from "@emotion/react";

const StyledLink = styled.div(({theme}) => css`
  a {
    color: ${theme.color.gold};
    text-decoration: none;
    font-size: 1em;
    padding: 1rem 0rem;
    display: inline-block;
  }
  
`)

export default StyledLink