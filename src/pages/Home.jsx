import { Button, Grid, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom"
import { PageLayout } from "../layout";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { HandleTheme } from "../containers/HandleTheme";

export const Home = () => {
    const [t] = useTranslation("global")

    const downloadEsRef = useRef();
    const downloadEnRef = useRef();

    const { degradadoMode } = HandleTheme();

    const handleDownload = () => {
        const language = localStorage.getItem("language")
        if (language === 'es') {
            downloadEsRef.current.click();
        } else {
            downloadEnRef.current.click();
        }
    }

    return (
        <PageLayout>
            <Grid sx={{ textAlign: "center" }}>
                <Typography variant="span">{t("home.iam")}</Typography>
                <Typography className={degradadoMode} variant="h2" fontWeight="bold">
                    {t("home.name")}
                </Typography>
                <Typography variant="h6">{t("home.role")}</Typography>
            </Grid>
            <Grid container justifyContent={"center"} sx={{ gap: "1rem", marginTop: "3.5rem" }}>
                <Grid item>
                    <Link component={RouterLink} color={"inherit"} underline="hover" to="/projects">
                        <Button variant="contained" sx={{ color: "secondary.button", backgroundColor: "primary.button" }}>{t("home.projects")}</Button>
                    </Link>
                </Grid>
                <Grid>
                    <Button variant="contained" onClick={handleDownload} sx={{ color: "secondary.button", backgroundColor: "primary.button" }}>{t("home.downloadcv")}</Button>
                </Grid>
                <a href="/CV_Javier_Torres.pdf" download style={{ display: "none" }} ref={downloadEsRef} />
                <a href="/CV_Javier_Torres_EN.pdf" download style={{ display: "none" }} ref={downloadEnRef} />
            </Grid>
        </PageLayout>
    );
};
