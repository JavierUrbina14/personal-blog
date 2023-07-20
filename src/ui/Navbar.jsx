import { Grid, Link } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { MaterialUISwitch } from "../components/SwitchButton"

export const Navbar = () => {
    return (
        <Grid container direction={"row"} justifyContent={"space-around"} alignItems={"center"} sx={{marginTop: "1rem"}}>
            <Grid>
                <img style={{width: "2rem"}} src="img/blogging.png" alt="" />
            </Grid>
            <Grid display={"flex"} alignItems={"center"} gap={1}>
                <Link component={RouterLink} color={"inherit"} underline="hover" to="/">Home</Link>
                <Link component={RouterLink} color={"inherit"} underline="hover" to="/contact">Contact</Link>
                <Link component={RouterLink} color={"inherit"} underline="hover" to="/about">About</Link>
                <MaterialUISwitch />
            </Grid>
        </Grid>
    )
}
