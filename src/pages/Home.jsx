import { Button, Grid, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom"
import { PageLayout } from "../layout/PageLayout";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

export const Home = () => {
    const [t] = useTranslation("global")

    const downloadRef = useRef();

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
                <Button variant="contained" onClick={() => downloadRef.current.click()} sx={{ color: "inherit", backgroundColor: "#Bf7625" }}>{t("home.downloadcv")}</Button>
                <a href="/Curriculum_Javier_Torres.pdf" download style={{display: "none"}} ref={downloadRef} />
            </Grid>
        </PageLayout>
    );
};
