import { Box } from "@mui/material"
import { Footer, Navbar } from "../ui"

export const PageLayout = ({ children, display = 'flex', flexDirection = 'column', justifyContent = 'center', alignItems = 'center' }) => {
    return (
        <Box
            sx={{ backgroundColor: "primary.main", height: "100vh" }}
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            <Box
                display={display}
                flexDirection={flexDirection}
                justifyContent={justifyContent}
                alignItems={alignItems}
                sx={{ height: "100%", marginTop: "2.5rem", marginBottom: "1rem" }}
            >
                <Navbar />
                {children}
                <Footer />
            </Box>
        </Box>
    )
}
