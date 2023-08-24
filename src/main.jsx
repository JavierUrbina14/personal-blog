import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './router/AppRouter'
import { BrowserRouter } from 'react-router-dom'
import { AppTheme } from './themes/AppTheme'
import { DarkLightThemeProvider } from './context/DarkLightThemeProvider'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkLightThemeProvider>
        <AppTheme>
          <AppRouter />
        </AppTheme>
      </DarkLightThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
