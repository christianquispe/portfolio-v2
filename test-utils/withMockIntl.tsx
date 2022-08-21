import { NextIntlProvider } from "next-intl";
import { NextRouter } from "next/router";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { render, RenderResult } from "@testing-library/react";

import { createMockRouter } from "./createMockRouter";

type MessagesPage = "index" | "layout";

export function withIntl(
  jsx: React.ReactElement,
  pages: MessagesPage[],
  customRouter?: Partial<NextRouter>
): RenderResult & { router: NextRouter; messages: any } {
  const router = createMockRouter({ locale: "en", ...customRouter });

  let messages = {};
  pages.forEach((page) => {
    messages = {
      ...messages,
      ...require(`../messages/${page}/${router.locale}.json`),
    };
  });

  return {
    router,
    messages,
    ...render(
      <RouterContext.Provider value={router}>
        <NextIntlProvider messages={messages}>{jsx}</NextIntlProvider>
      </RouterContext.Provider>
    ),
  };
}
