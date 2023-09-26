import { Box } from "@mui/material";
import { Footer, Navbar } from "../ui";

export const PageLayout = ({ children, display = 'flex', flexDirection = 'column', justifyContent = 'center', alignItems = 'center' }) => {
    return (
        <Box
            sx={{
                backgroundColor: "primary.main",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Navbar />
            <Box
                sx={{
                    display: display,
                    flexDirection: flexDirection,
                    justifyContent: justifyContent,
                    alignItems: alignItems,
                    flexGrow: 1,
                    marginTop: "70px",
                    marginBottom: "45px",
                }}
            >
                {children}
            </Box>
            <Footer />
        </Box>
    );
}
