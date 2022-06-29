import { createTheme } from "@nextui-org/react";

export const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      primary: "#571D91",
      secondary: "#0952A5",
    }, // override dark theme colors
    shadows: {
      blue500: "#0952A5",
      purple500: "#571D91",
    },
  },
});
