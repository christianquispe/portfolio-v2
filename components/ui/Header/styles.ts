import { styled } from "@nextui-org/react";

export const StitchesHeader = styled("header", {
  bg: "transparent",
  position: "sticky",
  top: "$0",
  zIndex: "$1",
  transition: "all .15s ease",
  variants: {
    detached: {
      true: {
        background: "$headerBackground",
        backdropFilter: "saturate(180%) blur(10px)",
        boxShadow: "0px 5px 20px -5px rgba(2, 1, 1, 0.1)",
      },
      false: {
        backdropFilter: "none",
        boxShadow: "none",
        background: "transparent",
      },
    },
  },
});
