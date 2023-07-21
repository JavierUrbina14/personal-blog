import { Grid, Link } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { MaterialUISwitch } from "../components/SwitchButton"
import { DarkLightThemeContext } from "../context/DarkLightThemeContext";
import { useContext } from "react";

export const Navbar = () => {
    const { darkMode, handleDarkMode } = useContext(DarkLightThemeContext);
    return (
        <Grid container direction={"row"} justifyContent={"space-around"} alignItems={"center"} sx={{paddingTop: "1rem", backgroundColor: "primary.main"}}>
            <Grid>
                <img style={{width: "2rem"}} src="img/blogging.png" alt="" />
            </Grid>
            <Grid display={"flex"} alignItems={"center"} gap={1}>
                <Link component={RouterLink} color={"inherit"} underline="hover" to="/">Home</Link>
                <Link component={RouterLink} color={"inherit"} underline="hover" to="/contact">Contact</Link>
                <Link component={RouterLink} color={"inherit"} underline="hover" to="/about">About</Link>
                <MaterialUISwitch checked={darkMode} onChange={handleDarkMode}/>
            </Grid>
        </Grid>
    )
}
