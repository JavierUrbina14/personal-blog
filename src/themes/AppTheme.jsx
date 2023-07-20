import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { LightTheme } from './LightTheme'

export const AppTheme = ({children}) => {
    return (
        <ThemeProvider theme={ LightTheme }>
            <CssBaseline />
            { children }
        </ThemeProvider>
    )
}
