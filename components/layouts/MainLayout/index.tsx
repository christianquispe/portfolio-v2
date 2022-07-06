import { Container, Text, Link } from "@nextui-org/react";

import { Metadata } from "@interfaces";

import { OpenGraph } from "@components/seo";
import { Header } from "@components/ui";

import { WrapperStyled } from "./styles";

interface MainLayoutProps {
  metadata: Metadata;
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  metadata,
  children,
}) => {
  return (
    <WrapperStyled>
      <OpenGraph metadata={metadata} />

      <Header />

      <main>
        <Container lg>{children}</Container>
      </main>

      <footer>
        <Container lg>
          <Text css={{ ta: "center" }}>
            Junio 2022 - Diseño inspirado en la web de{" "}
            <Link href="https://nextui.org/" target="_blank">
              NextUI
            </Link>
          </Text>
        </Container>
      </footer>
    </WrapperStyled>
  );
};
