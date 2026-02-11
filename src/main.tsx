import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LocalizationProvider } from './context/LocalizationContext.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <LocalizationProvider>
        <App />
      </LocalizationProvider>
    </ThemeProvider>
  </StrictMode>,
)
