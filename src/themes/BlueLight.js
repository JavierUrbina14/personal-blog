import { createTheme } from "@mui/material";

export const BlueLight = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#F0F0F0",
      button: "#0097A7",
      footer: "#BFBFBF",
    },
    secondary: {
      main: "#30596F",
      button: "white",
    },
    text: {
      main: "white",
    },
  },
});
