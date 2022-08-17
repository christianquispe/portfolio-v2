import { Metadata } from "@/interfaces";

import { OpenGraph } from "@/components/seo";
import { Footer, Header } from "@/components/ui";

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

      <main>{children}</main>

      <Footer />
    </WrapperStyled>
  );
};
