import styled from "@emotion/styled";
import { css } from "@emotion/react";

const StyledLink = styled.div(({theme}) => css`
  a {
    color: ${theme.color.gold};
    text-decoration: none;
    font-size: 1rem;
    padding: 1rem 0rem;
    display: inline-block;
    margin-bottom: 2rem;
  }
  
`)

export default StyledLink