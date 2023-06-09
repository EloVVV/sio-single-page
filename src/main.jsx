import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider } from 'react-router-dom'
import './index.css'
import router from './router/router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
