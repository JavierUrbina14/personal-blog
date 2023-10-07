import { DarkLightThemeContext } from "./";
import { HandleTheme } from "../containers/HandleTheme";

export const DarkLightThemeProvider = ({ children }) => {

    const { darkMode, handleDarkMode, theme } = HandleTheme();

    return (
        <DarkLightThemeContext.Provider value={{ darkMode, handleDarkMode, theme }}>
            {children}
        </DarkLightThemeContext.Provider>
    )
}