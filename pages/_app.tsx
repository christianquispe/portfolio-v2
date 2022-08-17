import { NextPage } from "next";
import { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextIntlProvider } from "next-intl";

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
    <NextIntlProvider
      formats={{
        dateTime: {
          short: {
            day: "numeric",
            month: "short",
            year: "numeric",
          },
        },
      }}
      messages={pageProps.messages}
      now={new Date(pageProps.now)}
      timeZone="Central Daylight Time"
    >
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
    </NextIntlProvider>
  );

  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(page);
};

export default MyApp;
