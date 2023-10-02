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
            <Grid display={"flex"} margin={{xs:"1rem 2rem", sm:"1rem 4rem", md: "1rem 4rem", lg: "1rem 9rem", xl:"1rem 20rem"}} gap={"5rem"} flexDirection={{ xs: "column", md: "row" }}>
                <Grid display={"flex"} alignItems={"center"} fontSize={{lg:"1rem", xl:"1.3rem"}} margin={{xs:"1rem 2rem", md:"0"}}>
                    <p>{t("about.description")}</p>
                </Grid>
                <Grid display={"flex"} justifyContent={"center"} alignItems={"center"}>
                    <img style={{ width: "25rem", height:"25rem" }} src={imageSrc} alt="" />
                </Grid>
            </Grid>
        </PageLayout>
    );
};
