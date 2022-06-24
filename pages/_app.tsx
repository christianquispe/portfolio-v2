import { NextPage } from "next";
import { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";

import { darkTheme } from "../themes";

import "../styles/globals.css";

export type NextPageWithLayout<T = {}> = NextPage<T> & {
  getLayout?: (page: JSX.Element) => JSX.Element;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp: NextPage<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const page: JSX.Element = (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );

  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(page);
};

export default MyApp;
