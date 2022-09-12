import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const MainLayout = styled.main(
  ({theme}) => css`
    background-color: ${theme.color.black};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    padding: 0 calc(10px + 2vmin);
  `
)

