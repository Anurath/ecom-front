import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './navBarPages/Login.jsx'
import NavBar from './NavBar.jsx'
import Cart from './navBarPages/Cart.jsx'
import Footer from './Footer.jsx'
import BecomeSeller from './navBarPages/BecomeSeller.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App />
  },
  {
    path:'/login',
    element:<><NavBar /><Login /></>
  },
  {
    path:'/cart',
    element:<><NavBar /><Cart /></>
  },
  {
    path:'/becomeseller',
    element:<><NavBar /><BecomeSeller /></>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
