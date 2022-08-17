import { createTheme } from "@nextui-org/react";

export const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      headerBackground: "hsla(0,0%,100%,0.8)",
    }, // override dark theme colors
  },
});
