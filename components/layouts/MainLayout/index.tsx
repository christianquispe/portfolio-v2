import Head from "next/head";
import { Container, Text, Link } from "@nextui-org/react";

import { Navbar } from "../../ui";

import { Metadata } from "../../../interfaces/seo";

import { HeaderStyled, WrapperStyled } from "./styles";
import { OpenGraph } from "../../seo";

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

      <HeaderStyled>
        <Container lg>
          <Navbar />
        </Container>
      </HeaderStyled>

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
