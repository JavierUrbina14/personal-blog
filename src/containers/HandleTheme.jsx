import { useEffect, useState } from "react";
import { BlueDark, BlueLight, OrangeDark, OrangeLight } from "../themes";


export const HandleTheme = () => {

    const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');

    let themeDark;
    let themeLight;
    let themeDegradadoDark;
    let themeDegradadoLight;
    let aboutImgDark;
    let aboutImgLight;
    let inputFormColor;

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode])

    const handleDarkMode = () => {
        setDarkMode(!darkMode);
        window.location.reload();
    }

    switch (import.meta.env.VITE_THEME) {
        case "BLUE":
            themeDark = BlueDark
            themeLight = BlueLight
            themeDegradadoDark = "degradadoBlueDark"
            themeDegradadoLight = "degradadoBlueLight"
            aboutImgDark = "/img/developer_bluedark.gif"
            aboutImgLight = "/img/developer_bluelight.gif"
            inputFormColor = "info"
            break;
        case "ORANGE":
            themeDark = OrangeDark
            themeLight = OrangeLight
            themeDegradadoDark = "degradadoOrange"
            themeDegradadoLight = "degradadoOrange"
            aboutImgDark = "/img/developer_orangedark.gif"
            aboutImgLight = "/img/developer_orangelight.gif"
            inputFormColor = "warning"
            break
        default:
            break;
    }

    const theme = darkMode ? themeDark : themeLight;

    const degradadoMode = darkMode ? themeDegradadoDark : themeDegradadoLight;

    const imageSrc = darkMode ? aboutImgDark : aboutImgLight;

    return {
        handleDarkMode,
        theme,
        darkMode,
        degradadoMode,
        imageSrc,
        inputFormColor
    }
}
