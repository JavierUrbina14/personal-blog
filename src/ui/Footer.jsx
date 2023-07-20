import { Grid } from "@mui/material"

export const Footer = () => {
    return (
        <Grid container justifyContent={"center"} alignItems={"center"} sx={{position: "absolute", bottom: 0, backgroundColor: 'primary.footer', padding: ".5rem", gap: ".5rem"}}>
            <span>Javier Urbina - 2023 - </span>
            <span>Github</span>
            <img style={{width: "1.5rem"}} src="img/github.png" alt="" />
        </Grid>
    )
}
