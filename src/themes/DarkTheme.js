import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
    palette: {
      mode: "dark",
        primary: {
            main: "#21232A",
            footer: "#12171a"
        },
        text:{
            primary: "#f0f4f4",
            secondary: "#f0f4f4",
        },
    },
});
