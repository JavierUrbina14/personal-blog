import { useContext } from "react";
import { Grid, Link } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { MaterialUISwitch } from "../components/SwitchButton"
import { DarkLightThemeContext } from "../context/DarkLightThemeContext";
import CodeOffIcon from '@mui/icons-material/CodeOff';

export const Navbar = () => {
    const { darkMode, handleDarkMode } = useContext(DarkLightThemeContext);
    return (
        <Grid container direction={"row"} justifyContent={"space-around"} alignItems={"center"} sx={{position:"absolute", top: "0", paddingTop: "1rem", backgroundColor: "primary.main"}}>
            <Grid>
                <CodeOffIcon sx={{ fontSize: 40 }} />
            </Grid>
            <Grid display={"flex"} alignItems={"center"} gap={1}>
                <Link component={RouterLink} color={"inherit"} underline="hover" to="/">Inicio</Link>
                <Link component={RouterLink} color={"inherit"} underline="hover" to="/about">Acerca</Link>
                <Link component={RouterLink} color={"inherit"} underline="hover" to="/contact">Contacto</Link>
                <MaterialUISwitch checked={darkMode} onChange={handleDarkMode}/>
            </Grid>
        </Grid>
    )
}
