import { useContext, useState } from 'react';
import { Divider, IconButton, Menu, MenuItem } from '@mui/material';
import { MaterialUISwitch } from './SwitchButton';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { DarkLightThemeContext } from '../context/DarkLightThemeContext';
import { useTranslation } from 'react-i18next';


export const SettingsMenu = () => {
    const [t,i18n] = useTranslation("global")
    const [anchorEl, setAnchorEl] = useState(null);
    const [languageMenuAnchorEl, setLanguageMenuAnchorEl] = useState(null);

    const open = Boolean(anchorEl);
    const openLanguageMenu = Boolean(languageMenuAnchorEl);
    const { darkMode, handleDarkMode } = useContext(DarkLightThemeContext);

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

    const handleChangeLanguage = (language) => {
        i18n.changeLanguage(language);
        setLanguageMenuAnchorEl(null); 
    }

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
                <MenuItem onClick={handleLanguageMenuClick}>Idioma<KeyboardArrowRightIcon /></MenuItem>
                <Divider />
                <MenuItem>Tema: <MaterialUISwitch checked={darkMode} onChange={handleDarkMode} /></MenuItem>
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
                <MenuItem onClick={() => handleChangeLanguage('es')}>Español</MenuItem>
                <MenuItem onClick={() => handleChangeLanguage('en')}>Inglés</MenuItem>
            </Menu>
        </div>
    );
}
