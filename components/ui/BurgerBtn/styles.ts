import { styled } from "@nextui-org/react";

export const BurgerBtnStyled = styled("div", {
  position: "relative",
  ".line": {
    display: "block",
    backgroundColor: "$foreground",
    height: "1px",
    width: "22px",
    lineHeight: "24px",
    transition: ".15s ease transform",
    pointerEvents: "none",
    userSelect: "none",
  },
  ".top": {
    transform: "matrix(1, 0, 0, 1, 0, -4)",
  },
  ".bottom": {
    transform: "matrix(1, 0, 0, 1, 0, 4)",
  },
  "&.closable": {
    ".top": {
      transform: "translateY(1px) rotate(45deg)",
    },
    ".bottom": {
      transform: "translateY(0) rotate(-45deg)",
    },
  },
  "@md": {
    display: "none",
  },
});
