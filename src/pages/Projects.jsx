import { Grid, Typography } from "@mui/material"
import { PageLayout } from "../layout/PageLayout"
import { ProjectItem } from "../components/ProjectItem"

export const Projects = () => {
    return (
        <PageLayout>
            <Grid paddingBottom={10}>
                <Typography className="degradado" variant="h3" fontWeight="bold">Proyectos</Typography>
            </Grid>
            <Grid container spacing={2} paddingBottom={10}>
                <Grid item xs={4}>
                    <ProjectItem
                        imagePath={'img/Journal-app-img.png'}
                        projectPath={'https://journal-jt.netlify.app/'}
                        projectTitle={'Journal App'}
                        projectDescription={'Aplicación de notas con autenticación de usuarios'}
                    />
                </Grid>
                <Grid item xs={4}>
                    <ProjectItem
                        imagePath={'img/Gif-app-img.png'}
                        projectPath={'https://gifexpert-jt.netlify.app/'}
                        projectTitle={'Gif App'}
                        projectDescription={'Aplicación de gifs con buscador'}
                    />
                </Grid>
                <Grid item xs={4}>
                    <ProjectItem
                        imagePath={'img/heroes-app-img.png'}
                        projectPath={'https://heroes-jt.netlify.app/'}
                        projectTitle={'Heroes App'}
                        projectDescription={'Aplicación de superhéroes con buscador'}
                    />
                </Grid>
            </Grid>
        </PageLayout>
    )
}
