import { useRouter } from "next/router";
import NextLink from "next/link";
import { useTranslations } from "next-intl";
import { CSS, Link } from "@nextui-org/react";

import { NavListWrraper } from "./styles";

interface NavItem {
  path: string;
  name: string;
}

interface NavListProps {
  opened: boolean;
  css?: CSS;
  handleLinkClick?: () => void
}

export const NavList: React.FC<NavListProps> = ({ opened, handleLinkClick, css }) => {
  const { pathname } = useRouter();
  const t = useTranslations("Layout.Navbar");

  const navItems: NavItem[] = [
    {
      name: t("aboutMe"),
      path: "/#me",
    },
    {
      name: t("blog"),
      path: "/blog",
    },
  ];

  return (
    <NavListWrraper open={opened} css={css}>
      {navItems.map((item) => (
        <li key={item.path}>
          <NextLink href={item.path} passHref>
            <Link
              onClick={handleLinkClick}
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
  );
};
