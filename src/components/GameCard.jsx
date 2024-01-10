import React, { useContext, useEffect, useState } from "react"
import { useCart } from "../contexts/CartContext"

const GameCard = ({ src, name, price }) => {
  const [isAdded, setAdded] = useState(false)

  const { cartItems, addToCart } = useCart()

  const handleClick = () => {
    addToCart({
      name: name,
      src: src,
      price: price,
    })

    setAdded(true)
  }

  return (
    <div className="w-full  max-w-md mx-auto  text-white rounded-md overflow-hidden shadow-lg transition-transform transform hover:scale-110 cur">
      <img
        src={src}
        alt="image_banner"
        className="w-full h-48 object-cover rounded-t-md"
      />
      <div className="flex flex-col gap-2 px-4  py-4">
        <div className="flex text-sm  justify-between text-slate-300">
          <button
            className={`${isAdded ? "text-green-300" : " "}`}
            onClick={handleClick}
          >
            {isAdded ? "Added ✓" : "Add to cart +"}
          </button>
          <p>${price}</p>
        </div>
        <h2 className="text-md  ">{name}</h2>
      </div>
    </div>
  )
}

export default GameCard
