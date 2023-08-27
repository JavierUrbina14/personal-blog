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
                sx={{ height: "100%", width: "100%", marginTop: "70px", marginBottom: "45px"}}
            >
                <Navbar />
                {children}
                <Footer />
            </Box>
        </Box>
    )
}
