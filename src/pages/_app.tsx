import { ThemeProvider } from "@material-ui/styles";
import type { AppProps } from "next/app";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import Head from "next/head";
import store from "src/store";
import theme from "src/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <CookiesProvider>
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
      </CookiesProvider>
    </Provider>
  );
}

export default MyApp;
