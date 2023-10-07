import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DarkLightThemeContext } from '../context';
import { SwitchButton } from '.';
import { IconButton, Menu, MenuItem } from '@mui/material';


export const MenuOptions = () => {
    const [t, i18n] = useTranslation("global")
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'es');

    const [languageMenuAnchorEl, setLanguageMenuAnchorEl] = useState(null);

    const openLanguageMenu = Boolean(languageMenuAnchorEl);
    const { darkMode, handleDarkMode } = useContext(DarkLightThemeContext);

    useEffect(() => {
        i18n.changeLanguage(language);
        localStorage.setItem('language', language);
        setLanguageMenuAnchorEl(null);
    }, [language]);

    const handleLanguage = (language) => {
        setLanguage(language);
        window.location.reload();
    }

    const handleLanguageMenuClick = (event) => {
        setLanguageMenuAnchorEl(event.currentTarget);
    };

    const handleLanguageMenuClose = () => {
        setLanguageMenuAnchorEl(null);
    };

    return (
        <>
            <IconButton onClick={handleLanguageMenuClick}>
                <img style={{ width: "1.7rem" }} src="/img/language_icon.png" alt="" />
            </IconButton>
            <SwitchButton checked={darkMode} onChange={handleDarkMode} />
            {/* Submenú de Idioma */}
            <Menu
                anchorEl={languageMenuAnchorEl}
                open={openLanguageMenu}
                onClose={handleLanguageMenuClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem onClick={() => handleLanguage('es')}>{t("settingsmenu.es")}</MenuItem>
                <MenuItem onClick={() => handleLanguage('en')}>{t("settingsmenu.en")}</MenuItem>
            </Menu>
        </>
    );
}
