import { useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
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

export const Navbar: React.FC = () => {
  const { pathname, events } = useRouter();
  const t = useTranslations("Layout.Navbar");

  const navItems: NavItem[] = [
    {
      name: t("aboutMe"),
      path: "/",
    },
    // {
    //   name: t("projects"),
    //   path: "/#projects",
    // },
    // {
    //   name: t("skills"),
    //   path: "/#skills",
    // },
    // {
    //   name: t("contact"),
    //   path: "/#contact",
    // },
    {
      name: t("blog"),
      path: "/blog",
    },
  ];

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
      <NextLink href="/" passHref>
        <Link>
          <Logo />
        </Link>
      </NextLink>
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
      <LanguageSelect css={{ ml: "$5" }} />
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
