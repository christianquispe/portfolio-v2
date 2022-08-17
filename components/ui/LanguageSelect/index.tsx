import { useRouter } from "next/router";
import Link from "next/link";
import { CSS, Dropdown } from "@nextui-org/react";

import { useMounted } from "@/hooks";

import { Languages, LANGUAGES } from "@/config";

interface LanguageSelectProps {
  css?: CSS;
}

export const LanguageSelect: React.FC<LanguageSelectProps> = ({ css }) => {
  const { locale, locales, route } = useRouter();
  const { isMounted } = useMounted();

  const otherLocale = locales?.filter((cur) => cur !== locale);

  if (!isMounted) {
    return null;
  }

  return (
    <Dropdown>
      <Dropdown.Button color="secondary" css={css} light auto size={"sm"}>
        {LANGUAGES[locale as Languages].text}
      </Dropdown.Button>

      <Dropdown.Menu aria-label="Static Actions">
        {otherLocale?.map((locale) => (
          <Dropdown.Item
            key={locale}
            css={{ a: { display: "block" } }}
            textValue={locale}
          >
            <Link href={route} locale={locale}>
              <a>{LANGUAGES[locale as Languages].text}</a>
            </Link>
          </Dropdown.Item>
        )) ?? (
          <Dropdown.Item key={"es"} textValue={"ES"}>
            ES
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};
