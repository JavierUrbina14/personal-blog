import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DarkLightThemeContext } from '../context';
import { SwitchButton } from './';
import { Divider, IconButton, Menu, MenuItem } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


export const SettingsMenu = () => {
    const [t, i18n] = useTranslation("global")
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'es');

    const [anchorEl, setAnchorEl] = useState(null);
    const [languageMenuAnchorEl, setLanguageMenuAnchorEl] = useState(null);

    const open = Boolean(anchorEl);
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

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleLanguageMenuClick = (event) => {
        setLanguageMenuAnchorEl(event.currentTarget);
    };


    const handleLanguageMenuClose = () => {
        setLanguageMenuAnchorEl(null);
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
                <MenuItem>{t("settingsmenu.theme")}<SwitchButton checked={darkMode} onChange={handleDarkMode} /></MenuItem>
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
                <MenuItem onClick={() => handleLanguage('es')}>{t("settingsmenu.es")}</MenuItem>
                <MenuItem onClick={() => handleLanguage('en')}>{t("settingsmenu.en")}</MenuItem>
            </Menu>
        </div>
    );
}
