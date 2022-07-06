import { Container, VariantProps } from "@nextui-org/react";
import { useEffect, useState } from "react";

import { Navbar } from "@components/ui";

import { StitchesHeader } from "./styles";

interface HeaderStyledProps extends VariantProps<typeof StitchesHeader> {
  detached: boolean;
  children: React.ReactNode;
}

const HeaderStyled: React.FC<HeaderStyledProps> = ({ children, ...rest }) => (
  <StitchesHeader {...rest}>{children}</StitchesHeader>
);

export const Header: React.FC = ({}) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    setScrollPosition(
      (typeof window !== "undefined" && window.pageYOffset) || 0
    );
    const onScroll = () => {
      requestAnimationFrame(() => {
        setScrollPosition(window.pageYOffset);
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const detached = scrollPosition > 30;

  return (
    <HeaderStyled detached={detached}>
      <Container lg>
        <Navbar />
      </Container>
    </HeaderStyled>
  );
};
