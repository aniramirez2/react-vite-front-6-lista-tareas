import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './AppRoutes.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>,
)