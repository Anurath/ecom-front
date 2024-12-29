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

let footerData = [
  {
      footerItemHeader: "ABOUT",
      footerItems: ["About", "Careers", "Contact Us", "Flipkart Stories", "Press", "Corporate"]
  },
  {
      footerItemHeader: "GROUP COMPANIES",
      footerItems: ["Myntra", "ClearTrip", "Shopsy"]
  },
  {
      footerItemHeader: "HELP",
      footerItems: ["Payments", "shippings", "Cancellation"]
  },
  {
      footerItemHeader: "CUSTOMER POLICY",
      footerItems: ["Security", "Privacy", "Sitemap", "Redressal", "EPR Compliance"]
  },
  {
      footerItemHeader: "Mail Us:",
      footerItems: ["Flipkart Internet Private Limited,", "Buildings Alyssa, Begonia &", "Clove Embassy Tech Village,", "Outer Ring Road, Devarabeesanahalli Village,", "EPR  Bengaluru, 560103,", "Karnataka, India"]
  },
  {
      footerItemHeader: " Registered Office Address:",
      footerItems: ["Flipkart Internet Private Limited,", " Buildings Alyssa, Begonia &", "Clove Embassy Tech Village, ", "Outer Ring Road, Devarabeesanahalli Village,", "Karnataka, India", "CIN : U51109KA2012PTC066107"," Telephone: 044-45614700/044-67415800"]
  },


]

const router=createBrowserRouter([
  {
    path:'/',
    element:<App />
  },
  {
    path:'/login',
    element:<><NavBar /><Login /> <Footer footerData={footerData} /> </>
  },
  {
    path:'/cart',
    element:<><NavBar /><Cart /> <Footer footerData={footerData} /> </>
  },
  {
    path:'/becomeseller',
    element:<><NavBar /><BecomeSeller /> <Footer footerData={footerData} /> </>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
