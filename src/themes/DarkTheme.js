import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const DarkTheme = createTheme({
    palette: {
        primary: {
            main: "#21232A",
            footer: "#c0c4dc"
        },
        error: {
            main: red.A400
        }
    },
});
