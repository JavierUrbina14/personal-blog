import { HandleProjectContext } from "./";
import { HandleProjects } from "../containers";

export const HandleProjectProvider = ({ children }) => {

    const { currentProject, projects, handleSlideChange, handleGoProject, setCurrentProject, } = HandleProjects();

    return (
        <HandleProjectContext.Provider value={{ currentProject, projects, handleSlideChange, handleGoProject, setCurrentProject, }}>
            {children}
        </HandleProjectContext.Provider>
    )
}