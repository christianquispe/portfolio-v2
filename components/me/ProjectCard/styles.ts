import { styled, Card } from "@nextui-org/react";

export const CardHeaderStyled = styled(Card.Header, {
  position: "absolute",
  zIndex: 1,
  top: 5,
});

export const CardFooterStyled = styled(Card.Footer, {
  position: "relative",
  bgBlur: "#0f111488",
  bottom: 0,
  zIndex: 1,
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "$3",
  "@xs": {
    position: "absolute",
    flexWrap: "nowrap",
    borderTop: "$borderWeights$light solid $gray800",
  },
  ".details": {
    flexGrow: 1,
  },
  ".actions": {
    display: "flex",
    justifyContent: "flex-end",
    gap: "$3",
    "@md": {
      flexGrow: 1,
    },
  },
});

export const IconsStyled = styled("div", {
  display: "flex",
  gap: "$3",
});
