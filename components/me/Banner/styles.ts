import Image from "next/image";

import { styled } from "@nextui-org/react";

export const BannerStyled = styled("section", {
  d: "flex",
  fd: "column",
  jc: "center",
  gap: "40px",
  minHeight: "calc(100vh - 120px)",
  py: "$5",
});
