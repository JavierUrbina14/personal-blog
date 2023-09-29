import { Route, Routes } from "react-router-dom"
import { Home, Contact, Projects } from "../pages"
// import { About } from "../pages/About"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                {/* <Route path="/about" element={<About />} /> */}
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </>
    )
}
