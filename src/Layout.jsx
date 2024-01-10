import React from "react"
import Header from "./components/Header/Header"
import { Outlet } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import { SearchProvider } from "./contexts/SearchContext"
import { CartProvider } from "./contexts/CartContext"

const Layout = () => {
  return (
    <div className="bg-[#131312]">
      <CartProvider>
        <SearchProvider>
          <Header />
          <Outlet />
          <Footer />
        </SearchProvider>
      </CartProvider>
    </div>
  )
}

export default Layout
