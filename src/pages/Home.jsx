import { Button, Grid, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom"
import { PageLayout } from "../layout/PageLayout";
import { useTranslation } from "react-i18next";

export const Home = () => {
    const [t] = useTranslation("global")

    return (
        <PageLayout>
            <Grid sx={{ textAlign: "center" }}>
                <Typography variant="span">{t("home.iam")}</Typography>
                <Typography className="degradado" variant="h2" fontWeight="bold">
                    {t("home.name")}
                </Typography>
                <Typography variant="h6">{t("home.role")}</Typography>
            </Grid>
            <Grid display={"flex"} justifyContent={"center"} sx={{ gap: "1rem", marginTop: "3.5rem" }}>
                <Link component={RouterLink} color={"inherit"} underline="hover" to="/projects">
                    <Button variant="contained" sx={{ color: "inherit", backgroundColor: "#Bf7625" }}>{t("home.projects")}</Button>
                </Link>
                <Button variant="contained" sx={{ color: "inherit", backgroundColor: "#Bf7625" }}>{t("home.downloadcv")}</Button>
            </Grid>
        </PageLayout>
    );
};
