import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '@fontsource/ibm-plex-sans/latin-400.css'
import '@fontsource/ibm-plex-sans/latin-500.css'
import '@fontsource/ibm-plex-sans/latin-600.css'
import '@fontsource/ibm-plex-mono/latin-400.css'
import '@fontsource/ibm-plex-mono/latin-500.css'
import './index.css'
import { I18nProvider } from './i18n'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById("root")!).render(
  <BrowserRouter><I18nProvider defaultLocale="pt">
    <App />
  </I18nProvider></BrowserRouter>
);
