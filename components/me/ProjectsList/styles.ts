import { styled } from "@nextui-org/react";

export const ProjectsListStyled = styled("section", {
  display: "grid",
  gap: "15px",
  gridTemplateRow: "auto",
  backgroundColor: "$accents0",
  padding: "$10",
  borderRadius: "4px",
  height: "550px",
});

export const ProjectsListHeaderStyled = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  ".filters": {
    display: "flex",
    gap: "$3",
  },
});
