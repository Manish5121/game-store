import React, { useContext, useEffect, useState } from "react"
import { useCart } from "../contexts/CartContext"

const GameCard = ({ game, onAddToCart }) => {
  const { addToCart, removeFromCart } = useCart()

  const handleClick = () => {
    if (game.isAdded) {
      removeFromCart(game)
      onAddToCart(game.id, false)
    } else {
      addToCart({
        id: game.id,
        name: game.name,
        src: game.background_image,
        price: game.price,
      })

      onAddToCart(game.id, true)
    }
  }

  return (
    <div className="w-full bg-[#2B2B2A] max-w-md mx-auto  text-white rounded-md overflow-hidden shadow-lg transition-transform transform hover:scale-110 cur">
      <img
        src={game.background_image}
        alt="image_banner"
        className="w-full h-48 object-cover rounded-t-md"
      />
      <div className="flex flex-col gap-2 px-4  py-4">
        <div className="flex text-sm  justify-between text-slate-300">
          <button
            className={`${game.isAdded ? "text-green-300" : " "}`}
            onClick={handleClick}
          >
            {game.isAdded ? "Added ✓" : "Add to cart +"}
          </button>
          <p>${game.price}</p>
        </div>
        <h2 className="text-md  ">{game.name}</h2>
      </div>
    </div>
  )
}

export default GameCard
