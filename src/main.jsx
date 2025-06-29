import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Router/Router.jsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>c
     <div className="max-w-screen-xl p-2 md:p-0 mx-auto">
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </div>
  </StrictMode>,
)
