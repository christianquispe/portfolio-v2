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
    bg: "$accents0",
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

export const DetailsStyled = styled("section", {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
});

export const ContactDataStyled = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  ".mail-icon": {
    display: "none",
    "@xs": {
      display: "initial",
    },
  },
  ul: {
    margin: 0,
    mt: "$5",
  },
  li: {
    display: "flex",
    gap: "$3",
    alignItems: "center",
  },
});
