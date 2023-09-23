import { Grid, Typography } from "@mui/material"
import { PageLayout } from "../layout/PageLayout"
import { ProjectItem } from "../components/ProjectItem"
import { useTranslation } from "react-i18next"

export const Projects = () => {
    const [t] = useTranslation("global")
    return (
        <PageLayout>
            <Grid paddingBottom={10}>
                <Typography className="degradado" variant="h3" fontWeight="bold">{t("projects.projects")}</Typography>
            </Grid>
            <Grid container spacing={4} paddingBottom={10} justifyContent={"center"}>
                <Grid item>
                    <ProjectItem
                        imagePath={'img/Journal-app-img.png'}
                        projectPath={'https://journal-jt.netlify.app/'}
                        projectTitle={'Journal App'}
                        projectDescription={t("projects.journaldescription")}
                    />
                </Grid>
                <Grid item>
                    <ProjectItem
                        imagePath={'img/Gif-app-img.png'}
                        projectPath={'https://gifexpert-jt.netlify.app/'}
                        projectTitle={'Gif App'}
                        projectDescription={t("projects.gifdescription")}
                    />
                </Grid>
                <Grid item>
                    <ProjectItem
                        imagePath={'img/heroes-app-img.png'}
                        projectPath={'https://heroes-jt.netlify.app/'}
                        projectTitle={'Heroes App'}
                        projectDescription={t("projects.heroesdescription")}
                    />
                </Grid>
            </Grid>
        </PageLayout>
    )
}
