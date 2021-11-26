import { ThemeProvider } from "@material-ui/styles";
import type { AppProps } from "next/app";
import CssBaseline from "@material-ui/core/CssBaseline";
import Head from "next/head";
import theme from "src/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>Boilerplate next material</title>
        <meta
          name="description"
          content="A simple project starter to work with typescript, React, NextJs, Redux Toolkit and Material UI"
        />
      </Head>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
