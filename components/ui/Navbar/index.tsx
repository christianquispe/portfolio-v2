import { useRouter } from "next/router";
import Image from "next/image";
import NextLink from "next/link";
import { Text, Spacer, Link } from "@nextui-org/react";

import { BurgerBtn } from "../BurgerBtn/index";

import { NavbarStyled, NavListWrraper } from "./styles";
import { useDialog } from "../../../hooks/useDialog";
import { useEffect } from "react";

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
    name: "Blog",
    path: "/blog",
  },
];

export const Navbar: React.FC = () => {
  const { pathname, events } = useRouter();

  const { open, handleClose, handleOpen } = useDialog();

  useEffect(() => {
    if (open) {
      // subscribe to next/router event
      events.on("routeChangeStart", handleClose);
      return () => {
        // unsubscribe to event on unmount to prevent memory leak
        events.off("routeChangeStart", handleClose);
      };
    }
  }, [events, handleClose, open]);

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
          <Text
            weight="bold"
            css={{
              fontSize: "$xl2",
              "@md": {
                fontSize: "$xl4",
              },
            }}
          >
            Christian Quispe
          </Text>
        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />
      <NavListWrraper className={open ? "open" : ""}>
        {navItems.map((item) => (
          <li key={item.path}>
            <NextLink href={item.path} passHref>
              <Link
                color={
                  item.path === pathname ||
                  pathname.split("/")[1] === item.path.replace("/", "")
                    ? "secondary"
                    : "text"
                }
              >
                {item.name}
              </Link>
            </NextLink>
          </li>
        ))}
      </NavListWrraper>
      <BurgerBtn active={open} onClose={handleClose} onOpen={handleOpen} />
    </NavbarStyled>
  );
};
