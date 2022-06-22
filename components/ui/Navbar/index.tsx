import Image from "next/image";
import NextLink from "next/link";

import { Text, Spacer, Link } from "@nextui-org/react";

import { NavbarStyled } from "./styles";

export const Navbar: React.FC = () => {
  return (
    <NavbarStyled>
      <Image
        src="/logo-transparente-blanco.png"
        alt="Icone del pokemon"
        width={70}
        height={70}
      />
      <NextLink href="/" passHref>
        <Link>
          <Text h2 weight="bold">
            Christian Quispe
          </Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />
      <ul>
        <li>
          <NextLink href="/for-johan" passHref>
            <Link>
              <Text>Para Johan</Text>
            </Link>
          </NextLink>
        </li>
      </ul>
    </NavbarStyled>
  );
};
