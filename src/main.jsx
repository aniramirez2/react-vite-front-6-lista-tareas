import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './AppRoutes.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </ChakraProvider>,
)