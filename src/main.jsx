import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeUser from './Components/HomeUser.jsx'
import Owner from './Components/Owner.jsx'
import HomeAdmin from './Components/HomeAdmin.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeUser />
  },
  {
    path: "/owner",
    element: <Owner />
  },
  {
    path: "/homeuser",
    element: <HomeUser/>
  },
  {
    path: "/homeadmin",
    element: <HomeAdmin/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
