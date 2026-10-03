import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import "./i18n.js"
import AppTheme from "./shared-theme/AppTheme.jsx";
import CssBaseline from '@mui/material/CssBaseline';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppTheme>
      <CssBaseline/>
      <App />
    </AppTheme>
  </StrictMode>,
)
