import React from "react"
import { useCart } from "../../contexts/CartContext"

const Cart = () => {
  const { cartItems, addToCart, getCartTotal } = useCart()
  console.log(cartItems)

  return (
    <div className="container text-white max-w-auto mx-auto py-8 px-8 lg:px-20 xl:px-25">
      <h2 className="text-3xl font-bold mb-4">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-2"
            >
              <div className="flex items-center">
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded"
                />
                <p className="ml-4">{item.name}</p>
              </div>
              <p>${item.price}</p>
            </div>
          ))}

          <div className="mt-4 flex justify-between">
            <p className="text-xl font-semibold">Total:</p>
            <p className="text-2xl font-bold">${getCartTotal()}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
