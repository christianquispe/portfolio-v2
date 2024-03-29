import { useEffect } from "react";
import NextLink from "next/link";
import { Text, Spacer, Link, useBodyScroll } from "@nextui-org/react";
import { useDialog } from "@/hooks";
import {
  BurgerBtn,
  ThemeToggle,
  Logo,
  LanguageSelect,
  MobileNavigation,
} from "@/components/ui";
import { VCardModal } from "@/components/me";
import { NavList } from "@/components/ui";

import { NavbarStyled } from "./styles";

export const Navbar: React.FC = () => {
  const { open, handleClose, handleOpen } = useDialog();
  const [_, setBodyHidden] = useBodyScroll(null, { scrollLayer: true });

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
      <NavList opened={false} />
      <Spacer x={0.2} />
      <MobileNavigation opened={open} onClose={() => handleClose()} />
      <LanguageSelect />
      <Spacer x={0.2} />
      <ThemeToggle />
      <Spacer x={0.2} />
      <VCardModal src="/christian-vcard.svg" />
      <Spacer x={0.2} />
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
