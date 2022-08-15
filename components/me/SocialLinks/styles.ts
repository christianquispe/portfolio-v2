import { styled } from "@nextui-org/react";

export const SocialMediaStyled = styled("ul", {
  display: " flex",
  alignItems: "center",
  gap: "$3",
  py: "$5",
  margin: 0,
  a: {
    display: "flex",
  },
});

export const SocialMediaItemStyled = styled("li", {
  display: " flex",
  alignItems: "center",
  margin: 0,
});
