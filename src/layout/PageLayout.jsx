import { Box } from "@mui/material"
import { Footer, Navbar } from "../ui"

export const PageLayout = ({ children }) => {
    return (
        <Box
            sx={{ backgroundColor: "primary.main", height: "100vh" }}
            display="flex" // Utiliza flexbox para centrar verticalmente
            flexDirection="column" // Alinea los elementos en columna
            alignItems="center" // Centra horizontalmente el contenido
        >
            <Navbar />
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                sx={{ height: "100%" }}
            >
                {children}
            </Box>
            <Footer />
        </Box>
    )
}
