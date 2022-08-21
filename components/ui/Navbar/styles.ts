import { styled } from "@nextui-org/react";

export const NavbarStyled = styled("nav", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: "75px",
  ul: {
    margin: "0",
    li: {
      margin: "0",
      d: "flex",
    },
  },
});
