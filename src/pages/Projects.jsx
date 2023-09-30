import { useTranslation } from "react-i18next"
import { PageLayout } from "../layout"
import { ProjectSwiper } from "../components"
import { Grid, Typography } from "@mui/material"

export const Projects = () => {
    const [t] = useTranslation("global")
    return (
        <PageLayout>
            <Grid paddingBottom={5}>
                <Typography className="degradado" variant="h4" fontWeight="bold">{t("projects.projects")}</Typography>
            </Grid>
            <Grid>
                <ProjectSwiper />
            </Grid>
        </PageLayout>
    )
}