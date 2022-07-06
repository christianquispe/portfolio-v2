import { Container, Text, Link } from "@nextui-org/react";

import { Aside, Header } from "@components/ui";
import { OpenGraph } from "@components/seo";

import { Metadata } from "@interfaces";

import { PostGrid, WrapperStyled } from "./styles";

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

      <Header />

      <main>
        <Container lg>
          <PostGrid>
            <div>{children}</div>
            <Aside />
          </PostGrid>
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
