import { createTheme } from "@nextui-org/react";

export const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {}, // override dark theme colors
    shadows: {
      blue500: "#0952A5",
      purple500: "#571D91",
    },
  },
});
