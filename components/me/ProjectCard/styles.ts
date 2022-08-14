import { styled, Card } from "@nextui-org/react";

export const CardHeaderStyled = styled(Card.Header, {
  position: "absolute",
  zIndex: 1,
  top: 5,
});

export const CardFooterStyled = styled(Card.Footer, {
  position: "absolute",
  bgBlur: "#0f111466",
  borderTop: "$borderWeights$light solid $gray800",
  bottom: 0,
  zIndex: 1,
});
