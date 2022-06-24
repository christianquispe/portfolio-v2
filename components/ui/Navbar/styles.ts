import { styled } from "@nextui-org/react";

export const NavbarStyled = styled("nav", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: "5.5rem",
  ul: {
    margin: "0",
    li: {
      margin: "0",
    },
  },
});

export const NavListWrraper = styled("ul", {
  d: "flex",
  ai: "center",
  gap: "$4",
});
