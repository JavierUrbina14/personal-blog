import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './router'
import { BrowserRouter } from 'react-router-dom'
import { AppTheme } from './themes'
import { DarkLightThemeProvider } from './context'
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next'
import englishDictionary from './languages/en.json'
import spanishDictionary from './languages/es.json'
import 'animate.css';
import './style.css'
import './ProjectStyle.css'

i18next.init({
  interpolation: { escapeValue: false },
  lng: localStorage.getItem('language') || 'es',
  resources: {
    en: {
      global: englishDictionary
    },
    es: {
      global: spanishDictionary
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkLightThemeProvider>
        <AppTheme>
          <I18nextProvider i18n={i18next}>
            <AppRouter />
          </I18nextProvider>
        </AppTheme>
      </DarkLightThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
