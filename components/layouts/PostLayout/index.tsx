import Head from "next/head";
import { Container, Text, Link, Grid } from "@nextui-org/react";

import { Aside, Navbar } from "../../ui";

import { Metadata } from "../../../interfaces/seo";

import { OpenGraph } from "../../seo";

import { HeaderStyled, WrapperStyled } from "./styles";

interface PostLayoutProps {
  metadata: Metadata;
  children: React.ReactNode;
}

export const PostLayout: React.FC<PostLayoutProps> = ({
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
        <Container lg>
          <Grid.Container gap={2}>
            <Grid md={8}>
              <div>{children}</div>
            </Grid>
            <Grid md={4}>
              <Aside />
            </Grid>
          </Grid.Container>
        </Container>
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
