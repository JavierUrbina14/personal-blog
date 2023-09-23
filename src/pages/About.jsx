import { Pagination } from "@mui/material"
import { PageLayout } from "../layout/PageLayout"

export const About = () => {
    return (
        <PageLayout justifyContent="start" alignItems="start">
            <h6>Historia Personal</h6>
            <h6>Mi pasión</h6>
            <h6>Experiencia y logros</h6>
            <h6>Valores y etica de trabajo</h6>
            <h6>Habilidades clave</h6>
            <h6>Testimonios o recomendaciones</h6>
            <h6>Educación y formación</h6>
            <h6>Intereses personales</h6>
            <h6>Estilo personal</h6>
            <h6>Fotos y multimedia</h6>
            <Pagination count={10} />
        </PageLayout>
    )
}