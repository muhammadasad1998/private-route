import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router_App from './config/Router_App.jsx'
import Navbar from './components/Navbar/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router_App />
  </React.StrictMode>,
)
