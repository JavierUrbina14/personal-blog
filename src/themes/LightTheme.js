import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: "#f0f4f4",
            footer: "#c0c4dc"
        },
        error: {
            main: red.A400
        }
    },
});
