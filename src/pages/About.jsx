import { Grid, Typography } from "@mui/material";
import { PageLayout } from "../layout/PageLayout";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { DarkLightThemeContext } from "../context";

export const About = () => {
    const [t] = useTranslation("global")
    const { darkMode } = useContext(DarkLightThemeContext);
    const imageSrc = darkMode ? "/img/developer_dark.gif" : "/img/developer_light.gif";
    return (
        <PageLayout>
            <Grid display="flex" justifyContent="center">
                <Typography className="degradado" variant="h4" fontWeight="bold">
                    {t("about.title")}
                </Typography>
            </Grid>
            <Grid display={"flex"} margin={"1rem 10rem"} gap={"5rem"} flexDirection={{ xs: "column", md: "row" }}>
                <Grid display={"flex"} alignItems={"center"} margin={{ xs: "0 2rem", md: "0rem" }}>
                    <p>{t("about.description")}</p>
                </Grid>
                <Grid>
                    <img style={{ width: "25rem" }} src={imageSrc} alt="" />
                </Grid>
            </Grid>
        </PageLayout>
    );
};
