import { useContext, useEffect, useState } from 'react';
import { Divider, IconButton, Menu, MenuItem } from '@mui/material';
import { MaterialUISwitch } from './SwitchButton';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { DarkLightThemeContext } from '../context/DarkLightThemeContext';
import { useTranslation } from 'react-i18next';


export const SettingsMenu = () => {
    const [t, i18n] = useTranslation("global")
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'es');

    const [anchorEl, setAnchorEl] = useState(null);
    const [languageMenuAnchorEl, setLanguageMenuAnchorEl] = useState(null);

    const open = Boolean(anchorEl);
    const openLanguageMenu = Boolean(languageMenuAnchorEl);
    const { darkMode, handleDarkMode } = useContext(DarkLightThemeContext);

    useEffect(() => {
        // Configura i18next con el idioma seleccionado
        i18n.changeLanguage(language);

        // Guarda el idioma seleccionado en localStorage
        localStorage.setItem('language', language);
    }, [language]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleLanguageMenuClick = (event) => {
        setLanguageMenuAnchorEl(event.currentTarget); // Abre el submenú de idioma
    };


    const handleLanguageMenuClose = () => {
        setLanguageMenuAnchorEl(null); // Cierra el submenú de idioma
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton onClick={handleClick}>
                <SettingsIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleLanguageMenuClick}>{t("settingsmenu.language")}<KeyboardArrowRightIcon /></MenuItem>
                <Divider />
                <MenuItem>{t("settingsmenu.theme")}<MaterialUISwitch checked={darkMode} onChange={handleDarkMode} /></MenuItem>
            </Menu>

            {/* Submenú de Idioma */}
            <Menu
                anchorEl={languageMenuAnchorEl}
                open={openLanguageMenu}
                onClose={handleLanguageMenuClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem onClick={() => setLanguage('es')}>{t("settingsmenu.es")}</MenuItem>
                <MenuItem onClick={() => setLanguage('en')}>{t("settingsmenu.en")}</MenuItem>
            </Menu>
        </div>
    );
}
