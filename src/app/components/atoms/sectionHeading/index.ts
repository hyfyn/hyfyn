import styled from "@emotion/styled";
import { css } from '@emotion/react'

export const H1 = styled.h1(({theme}) => css`
  margin: 0;
`)

export const H2 = styled.h2(({theme}) => css`
  font-size: 1em;
  margin: 0;
  font-weight: 100;
`)

export const H4 = styled.h4(({theme}) => css`
  font-size: 0.9em;
  margin: 0;
  color: ${theme.color.gold}
`)
export const H5 = styled.h5(({theme}) => css`
  font-size: 0.7em;
  margin: 0;
  font-weight: 100; 
`)