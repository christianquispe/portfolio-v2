import { styled } from "@nextui-org/react";

export const WrapperStyled = styled("div", {
  position: "relative",
  zIndex: "1",
  d: "flex",
  fd: "column",
  minHeight: "100vh",
  footer: {
    mt: "auto",
    height: "80px",
    dflex: "center",
  },
  "&::before, &::after": {
    content: "",
    position: "fixed",
    display: "block",
    opacity: ".3",
    br: "50%",
    zIndex: "-1",
  },
  "&::before": {
    width: "20rem",
    height: "20rem",
    bottom: "20%",
    left: "20%",
    bg: "$blue500",
    boxShadow: "12rem 12rem 0 $blue500",
    transform: "translateX(-200px)",
    filter: "blur(100px)",
  },
  "&::after": {
    width: "30rem",
    height: "30rem",
    bottom: "20%",
    top: "10%",
    right: "10%",
    bg: "$purple300",
    filter: "blur(90px)",
    boxShadow: "12rem 12rem 0 $blue500",
    transform: "translateX(100px)",
  },
});

export const HeaderStyled = styled("header", {
  bgBlur: "#000000DD",
  position: "sticky",
  top: "$0",
  zIndex: "$1"
});
