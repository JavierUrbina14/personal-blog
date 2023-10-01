import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
    palette: {
      mode: "dark",
        primary: {
            main: "#21232A",
            light: "#434755",
            button: "#Bf7625",
            footer: "#12171a"
        },
        secondary: {
            main: "#171B28"
        },
        text:{
            primary: "#f0f4f4",
            secondary: "#f0f4f4",
        },
    },
});
