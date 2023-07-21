import { Grid, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = () => {
    return (
        <Grid container justifyContent={"center"} alignItems={"center"} sx={{position: "absolute", bottom: 0, backgroundColor: 'primary.footer', padding: ".5rem", gap: ".5rem"}}>
            <Typography variant="span">Javier Urbina - 2023 - </Typography>
            <Typography variant="span">Github</Typography>
            <GitHubIcon />
        </Grid>
    )
}
