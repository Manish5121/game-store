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

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id)
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id))
  }

  const getCartTotal = () => {
    const total = cartItems.reduce(
      (total, item) => Math.floor(total + Number(item.price)),
      0
    )
    return total.toFixed(2)
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, getCartTotal }}
    >
      {children}
    </CartContext.Provider>
  )
}
