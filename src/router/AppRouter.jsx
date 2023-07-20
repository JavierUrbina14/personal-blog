import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { About } from "../pages/About"
import { Contact } from "../pages/Contact"
import { Footer } from "../ui/Footer"
import { Navbar } from "../ui/Navbar"
import { Grid } from "@mui/material"

export const AppRouter = () => {
    return (
        <Grid sx={{backgroundColor: "primary.main"}}>
            <Navbar />
            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </Grid>
    )
}
