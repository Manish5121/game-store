import React from "react"
import Header from "./components/Header/Header"
import { Outlet } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import { SearchProvider } from "./contexts/SearchContext"
import { CartProvider } from "./contexts/CartContext"
import { GameDataProvider } from "./contexts/GameDataContext"
import {
  SignedOut,
  SignedIn,
  SignInButton,
  SignOutButton,
} from "@clerk/clerk-react"

const Layout = () => {
  return (
    <>
      <SignedIn>
        <div className="bg-[#131312]">
          <CartProvider>
            <SearchProvider>
              <GameDataProvider>
                <Header />
                <Outlet />
                <Footer />
              </GameDataProvider>
            </SearchProvider>
          </CartProvider>
        </div>
      </SignedIn>
      <SignedOut>
        <SignInButton />
        <p>This content is public. Only signed out users can see this.</p>
      </SignedOut>
    </>
  )
}

export default Layout
