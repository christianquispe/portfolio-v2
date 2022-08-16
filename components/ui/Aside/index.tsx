import { User } from "@nextui-org/react";
import { AsideStyled } from "./styles";

export const Aside: React.FC = () => {
  return (
    <AsideStyled>
      <User
        name="Christian Quispe"
        src="/logo-transparente-blanco.png"
        altText="Logo de Christian Quispe"
      >
        Programador Front End
      </User>
    </AsideStyled>
  );
};
