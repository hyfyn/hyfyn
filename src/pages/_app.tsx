import type { AppProps } from 'next/app'
import { GlobalStyles } from 'app/styles/GlobalStyles';
import { ThemeProvider } from "@emotion/react";
import theme from "app/styles/theme";
import MainLayout from 'layout/main';
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  )
  
}