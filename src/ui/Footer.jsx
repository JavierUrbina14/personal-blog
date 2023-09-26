import { Grid, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = () => {
    return (
        <Grid container justifyContent={"center"} alignItems={"flex-end"} sx={{ backgroundColor: 'primary.footer', padding: ".5rem", gap: ".5rem", marginTop: "auto" }}>
            <Typography variant="span">Javier Urbina - 2023 - </Typography>
            <Link component={RouterLink} to="https://github.com/JavierUrbina14" display={"flex"} alignItems="center" color={"inherit"} underline="hover">
                <Typography variant="span">Github</Typography>
                <GitHubIcon />
            </Link>
        </Grid>
    )
}
