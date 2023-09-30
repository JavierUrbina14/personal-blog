import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
    palette: {
      mode: "dark",
        primary: {
            main: "#21232A",
            button: "#Bf7625",
            footer: "#12171a"
        },
        secondary: {
            main: "#0E1323"
        },
        text:{
            primary: "#f0f4f4",
            secondary: "#f0f4f4",
        },
    },
});
