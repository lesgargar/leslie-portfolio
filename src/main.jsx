import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import "./styles/variables.css"
import "./styles/animations.css"
import App from './App.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import { BrowserRouter } from 'react-router-dom'
import ScrollToHash from './components/ScrollToHash.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ScrollToHash/>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
