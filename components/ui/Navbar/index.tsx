import { useRouter } from "next/router";
import Image from "next/image";
import NextLink from "next/link";

import { Text, Spacer, Link } from "@nextui-org/react";

import { NavbarStyled, NavListWrraper } from "./styles";

interface NavItem {
  path: string;
  name: string;
}

const navItems: NavItem[] = [
  {
    name: "Sobre mi",
    path: "/",
  },
  {
    name: "Para Johan",
    path: "/for-johan",
  },
];

export const Navbar: React.FC = () => {
  const { pathname } = useRouter();

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
      <NavListWrraper>
        {navItems.map((item) => (
          <li key={item.path}>
            <NextLink href={item.path} passHref>
              <Link color={item.path === pathname ? "secondary" : "text"}>
                {item.name}
              </Link>
            </NextLink>
          </li>
        ))}
      </NavListWrraper>
    </NavbarStyled>
  );
};
