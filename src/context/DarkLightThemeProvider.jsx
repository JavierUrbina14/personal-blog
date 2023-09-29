import { useEffect, useState } from "react";
import { DarkTheme, LightTheme } from "../themes";
import { DarkLightThemeContext } from "./";

export const DarkLightThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');
    useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode])

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