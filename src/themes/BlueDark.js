import { createTheme } from "@mui/material";

export const BlueDark = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#333333",
      button: "#5D919D",
      footer: "#464646",
    },
    secondary: {
      main: "#1A4258",
    },
    text: {
      secondary: "white",
    },
  },
});
