import { Container, Link, Text } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

export const Footer: React.FC = () => {
  const t = useTranslations("Layout.Footer");
  const { locale } = useRouter();

  return (
    <footer>
      <Container lg>
        <Text css={{ ta: "center" }}>
          {t.rich("title", {
            locale,
            code: (children) => (
              <Link href="https://nextui.org/" target="_blank">
                {children}
              </Link>
            ),
          })}
        </Text>
      </Container>
    </footer>
  );
};
