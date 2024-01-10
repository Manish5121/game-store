import React, { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const useCart = () => {
  return useContext(CartContext)
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, { ...item }])
  }

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + Number(item.price), 0)
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, getCartTotal }}>
      {children}
    </CartContext.Provider>
  )
}
