import { useState } from "react";
import { DarkTheme, LightTheme } from "../themes";
import { DarkLightThemeContext } from "./DarkLightThemeContext";

export const DarkLightThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const handleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    const theme = darkMode ? DarkTheme : LightTheme;

    return (
        <DarkLightThemeContext.Provider value={{darkMode, handleDarkMode, theme}}>
            { children }
        </DarkLightThemeContext.Provider>
    )
}