import { useEffect } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { Text, Spacer, Link, useBodyScroll } from "@nextui-org/react";
import { useDialog } from "@/hooks";
import { BurgerBtn, ThemeToggle, Logo, LanguageSelect } from "@/components/ui";
import { VCardModal } from "@/components/me";
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
    name: "Blog",
    path: "/blog",
  },
];

export const Navbar: React.FC = () => {
  const { pathname, events } = useRouter();

  const { open, handleClose, handleOpen } = useDialog();
  const [_, setBodyHidden] = useBodyScroll(null, { scrollLayer: true });

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

  useEffect(() => {
    setBodyHidden(open);
  }, [open, setBodyHidden]);

  return (
    <NavbarStyled>
      <Logo />
      <NextLink href="/" passHref>
        <Link>
          <Text
            weight="bold"
            css={{
              fontSize: "$xl4",
              display: "none",
              "@xs": {
                display: "initial",
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
      <LanguageSelect css={{ml: "$5"}} />
      <ThemeToggle css={{ ml: "$4" }} />
      <VCardModal src="/christian-vcard.svg" />
      <BurgerBtn
        active={open}
        onClose={() => {
          handleClose();
        }}
        onOpen={() => {
          handleOpen();
        }}
      />
    </NavbarStyled>
  );
};
