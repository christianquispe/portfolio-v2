import { styled } from "@nextui-org/react";

export const MySkillsStyled = styled("article", {
  display: "grid",
  gap: "15px",
  gridTemplateRow: "auto",
  backgroundColor: "$accents0",
  padding: "$10",
  borderRadius: "4px",
  height: "fit-content",
});

export const SkillItemStyled = styled("li", {
  display: "flex",
  alignItems: "center",
  gap: "$3",
});

export const SkillsListStyled = styled("ul", {
  display: "grid",
  gridTemplateColumns: "auto auto",
  columnGap: "$3",
  rowGap: "$3",
});
