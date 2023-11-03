import { Button, Grid, Typography } from "@mui/material"
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { HandleProjectContext } from "../context";

export const ProjectsDetails = () => {

    const [t] = useTranslation("global");
    const { projects, currentProject, handleGoProject } = useContext(HandleProjectContext);

    return (
        <Grid
            display={"flex"}
            sx={{
                flexDirection: "column",
                width: "16rem",
                overflow: "hidden",
                alignItems: "center",
                margin: "1rem 0",
                gap: "1rem",
            }}
        >
            <Grid>
                <Typography color={"text.main"} variant="h5">
                    {projects[currentProject].title}
                </Typography>
                <Typography color={"text.main"}>
                    {t(projects[currentProject].description)}
                </Typography>
            </Grid>
            <Typography color={"text.main"} marginTop={"auto"}>
                {t("projectswiper.tecnologies")}
            </Typography>
            <Grid
                container
                justifyContent="center"
                sx={{
                    gap: "1rem",
                    display: "flex",
                    borderRadius: ".5rem",
                }}
            >
                {projects[currentProject].tecnologies.map((technology, index) => (
                    <div key={index} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <img
                            src={`img/${technology.toLowerCase()}_icon.png`}
                            alt={technology}
                            title={technology}
                            style={{ maxWidth: "40px" }}
                        />
                    </div>
                ))}
            </Grid>
            <Button
                variant="contained"
                onClick={handleGoProject}
                sx={{
                    color: "secondary.button",
                    backgroundColor: "primary.button",
                    alignSelf: "center",
                }}
            >
                {t("projectswiper.goproject")}
            </Button>
        </Grid>
    )
}
