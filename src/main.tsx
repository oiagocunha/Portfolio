import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { I18nProvider } from './i18n'

createRoot(document.getElementById("root")!).render(
  <I18nProvider defaultLocale="pt">
    <App />
  </I18nProvider>
);
