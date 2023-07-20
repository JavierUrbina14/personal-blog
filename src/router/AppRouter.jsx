import { Route, Routes } from "react-router-dom"
import { Home } from "../personal-blog/pages/Home"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/*" element={<Home/>} />
        </Routes>
    )
}
