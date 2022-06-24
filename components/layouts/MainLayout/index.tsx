import Head from "next/head";
import { Container, Text, Link } from "@nextui-org/react";

import { Navbar } from "../../ui";

import { HeaderStyled, WrapperStyled } from "./styles";

interface MainLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <WrapperStyled>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/logo-transparente-blanco.png" />
      </Head>

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
