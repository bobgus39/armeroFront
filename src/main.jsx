import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { I18nProvider } from '@heroui/react'
import './index.css'
import App from './App.jsx'

// HeroUI v3 no exporta HeroUIProvider: los estilos van por CSS y no hace
// falta wrapper. Lo único que conviene envolver es el locale, para que los
// componentes con formato o texto propio (DatePicker, Calendar, NumberField,
// etiquetas ARIA de Select/Table…) salgan en español.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nProvider locale="es-ES">
      <App />
    </I18nProvider>
  </StrictMode>,
)
