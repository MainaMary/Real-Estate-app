import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import CustomLoader from './components/CustomLoader'
import App from './App'
import './index.css'
import { allRoutes } from './routes/routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={allRoutes} fallbackElement={<CustomLoader/>}/>
  </React.StrictMode>,
)
