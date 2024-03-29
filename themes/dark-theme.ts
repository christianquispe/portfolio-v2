import { createTheme } from "@nextui-org/react";

export const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      headerBackground: "rgba(0,0,0,0.5)",
    }, // override dark theme colors
  },
});
