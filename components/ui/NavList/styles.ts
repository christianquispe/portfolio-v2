import { styled } from "@nextui-org/react";

export const NavListWrraper = styled("ul", {
  position: "fixed",
  transform: "translateY(-100vh)",
  opacity: 0,
  d: "flex",
  fd: "column",
  gap: "$4",
  top: "80px",
  left: 0,
  m: 0,
  p: 0,
  variants: {
    open: {
      true: {
        zIndex: "$max",
        transition: ".2s ease transform, .2s ease opacity",
        transform: "translateY(0)",
        opacity: 1,
        background: "$headerBackground",
        backdropFilter: "saturate(180%) blur(10px)",
        height: "100vh",
        width: "100%",
        padding: "$10",
      },
    },
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
