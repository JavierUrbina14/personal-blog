import { useTranslation } from "react-i18next"
import { PageLayout } from "../layout"
import { ProjectSwiper } from "../components"
import { Grid, Typography } from "@mui/material"
import { HandleTheme } from "../containers/HandleTheme"

export const Projects = () => {
    const [t] = useTranslation("global")
    const { degradadoMode } = HandleTheme();
    return (
        <PageLayout>
            <Grid paddingBottom={5}>
                <Typography className={degradadoMode} variant="h4" fontWeight="bold">{t("projects.projects")}</Typography>
            </Grid>
            <Grid>
                <ProjectSwiper />
            </Grid>
        </PageLayout>
    )
}