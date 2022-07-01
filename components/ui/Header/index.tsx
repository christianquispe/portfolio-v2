import { Container } from "@nextui-org/react";

import { Navbar } from "../Navbar";

import { HeaderStyled } from "./styles";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <HeaderStyled>
      <Container lg>
        <Navbar />
      </Container>
    </HeaderStyled>
  );
};
