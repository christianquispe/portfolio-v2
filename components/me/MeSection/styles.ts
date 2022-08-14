import { styled } from "@nextui-org/react";

export const MeSectionStyled = styled("section", {
  ".title": {
    ta: "center",
    marginBottom: "$10",
  },
  ".wrapper-me-content": {
    display: "grid",
    columnGap: "20px",
    rowGap: "20px",
    width: "100%",
    ".me": {
      gridArea: "me",
    },
    ".skills": {
      gridArea: "skills",
    },
    ".projects": {
      gridArea: "projects",
    },
    gridTemplateAreas: `"me" "skills" "projects"`,
    ".section-into-me": {
      display: "grid",
      gap: "15px",
      gridTemplateRow: "auto",
      backgroundColor: "$accents0",
      padding: "$10",
      borderRadius: "4px",
      height: "fit-content",
    },
    ".container-avatar": {
      width: "100%",
      maxWidth: "400px",
      margin: "0 auto",
      height: "auto",
      img: {
        borderRadius: "4px",
      },
    },
    "@sm": {
      ".me": {
        gridTemplateColumns: "400px 1fr",
      },
    },
    "@md": {
      gridTemplateColumns: "400px 1fr",
      gridTemplateAreas: `"me skills"
                        "me projects"`,
      ".me": {
        gridTemplateColumns: "initial",
      },
    },
  },
});
