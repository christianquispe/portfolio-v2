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
      d: "flex",
    },
  },
});

export const NavListWrraper = styled("ul", {
  position: "fixed",
  transform: "translateY(-100vh)",
  opacity: 0,
  d: "flex",
  fd: "column",
  gap: "$4",
  top: "88px",
  left: 0,
  transition: ".2s ease transform, .2s ease opacity",
  "&.open": {
    transform: "translateY(0)",
    opacity: 1,
    bgBlur: "#000000DD",
    paddingLeft: "20px",
    height: "100vh",
    width: "100%",
  },
  "@md": {
    d: "flex",
    fd: "row",
    position: "initial",
    ai: "center",
    transform: "initial",
    opacity: 1,
  },
});
