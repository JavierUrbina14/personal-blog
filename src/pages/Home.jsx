import { Button, Grid, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom"
import { PageLayout } from "../layout/PageLayout";

export const Home = () => {
    return (
        <PageLayout>
            <Grid sx={{ textAlign: "center" }}>
                <Typography variant="span">¡Hola! Soy</Typography>
                <Typography className="degradado" variant="h2" fontWeight="bold">
                    Javier Urbina
                </Typography>
                <Typography variant="h6">Full-Stack Developer</Typography>
            </Grid>
            <Grid display={"flex"} justifyContent={"center"} sx={{ gap: "1rem", marginTop: "3.5rem" }}>
                <Link component={RouterLink} color={"inherit"} underline="hover" to="/projects">
                    <Button variant="contained" sx={{ color: "inherit", backgroundColor: "#Bf7625" }}>Ver projectos</Button>
                </Link>
                <Button variant="contained" sx={{ color: "inherit", backgroundColor: "#Bf7625" }}>Descargar Curriculum</Button>
            </Grid>
        </PageLayout>
    );
};
