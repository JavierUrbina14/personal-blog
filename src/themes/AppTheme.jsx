import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { LightTheme } from './LightTheme'
import { DarkTheme } from './DarkTheme'

export const AppTheme = ({children}) => {
    return (
        <ThemeProvider theme={ DarkTheme }>
            <CssBaseline />
            { children }
        </ThemeProvider>
    )
}
