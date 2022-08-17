import { NextPage } from "next";
import { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";

import { darkTheme, lightTheme } from "@/themes";

import "../styles/globals.css";
import "../styles/dracula-prism.css";

export type NextPageWithLayout<T = {}> = NextPage<T> & {
  getLayout?: (page: JSX.Element) => JSX.Element;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp: NextPage<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const page: JSX.Element = (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  );

  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(page);
};

export default MyApp;
