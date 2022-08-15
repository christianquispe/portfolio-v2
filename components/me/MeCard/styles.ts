import { styled } from "@nextui-org/react";

export const MeCardStyled = styled("article", {
  display: "grid",
  gap: "15px",
  gridTemplateRow: "auto",
  backgroundColor: "$accents0",
  padding: "$10",
  borderRadius: "4px",
  height: "fit-content",
  ".container-avatar": {
    position: "relative",
  },
  ".social-media-links": {
    position: "absolute",
    top: "$5",
    right: "$5",
    bgBlur: "#0f111466",
    padding: "$5",
    borderRadius: "$base",
  },
  "@sm": {
    gridTemplateColumns: "400px 1fr",
  },
  "@md": {
    gridTemplateColumns: "initial",
  },
});
