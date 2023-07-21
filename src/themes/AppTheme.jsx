import { useContext } from 'react'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { DarkLightThemeContext } from '../context/DarkLightThemeContext';

export const AppTheme = ({ children }) => {
    const { theme } = useContext(DarkLightThemeContext)

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
                {children}
        </ThemeProvider>
    )
}
