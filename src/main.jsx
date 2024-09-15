import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import { ThemeProvider } from './providers/ThemeProvider.jsx'
import { QuizProvider } from './providers/QuizProvider.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <QuizProvider>
        <App />
      </QuizProvider>
    </ThemeProvider>
  </StrictMode>,
)
