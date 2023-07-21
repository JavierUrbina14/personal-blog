import { Typography } from "@mui/material";
import { PageLayout } from "../layout/PageLayout";

export const Home = () => {
    return (
        <PageLayout>
                <Typography variant="span">¡Hola! Soy</Typography>
                <Typography variant="h2" fontWeight="bold">
                    Javier Urbina
                </Typography>
                <Typography variant="h6">Full-Stack Developer</Typography>
        </PageLayout>
    );
};
