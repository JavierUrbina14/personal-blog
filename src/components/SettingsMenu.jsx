import { useContext, useState } from 'react';
import { Divider, IconButton, Menu, MenuItem } from '@mui/material';
import { MaterialUISwitch } from './SwitchButton';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { DarkLightThemeContext } from '../context/DarkLightThemeContext';

export const SettingsMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [languageMenuAnchorEl, setLanguageMenuAnchorEl] = useState(null); // Nuevo estado para el submenú de idioma

    const open = Boolean(anchorEl);
    const openLanguageMenu = Boolean(languageMenuAnchorEl); // Nuevo estado para el submenú de idioma
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
                {/* Agrega elementos de menú para el submenú de idioma aquí */}
                <MenuItem onClick={handleLanguageMenuClose}>Español</MenuItem>
                <MenuItem onClick={handleLanguageMenuClose}>Inglés</MenuItem>
                {/* Agrega más opciones de idioma según sea necesario */}
            </Menu>
        </div>
    );
}
