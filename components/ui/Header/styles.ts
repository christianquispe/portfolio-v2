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
        bgBlur: "#000000DD",
      },
    },
  },
});
