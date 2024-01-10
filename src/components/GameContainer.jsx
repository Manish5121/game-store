import React, { useEffect, useState } from "react"
import GameCard from "./GameCard"
import { useSearch } from "../contexts/SearchContext"

const GameContainer = ({ gameData }) => {
  const { searchQuery } = useSearch()

  const generateRandomPrice = () => {
    const minPrice = 10
    const maxPrice = 60
    return (Math.random() * (maxPrice - minPrice) + minPrice).toFixed(2)
  }

  const addDummyPrices = (games) => {
    return games.map((game) => ({
      ...game,
      price: generateRandomPrice(),
    }))
  }

  const completeGameData = addDummyPrices(gameData)

  const filteredGames = completeGameData.filter((game) =>
    game.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className=" max-w-auto mx-auto py-8 px-8 lg:px-20 xl:px-25">
      <h1 className=" text-white font-semibold text-4xl mx-auto py-10">
        Discover Games
      </h1>
      <div className="container  grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {filteredGames &&
          filteredGames.map((game) => (
            <GameCard
              key={game.name}
              name={game.name}
              src={game.background_image}
              price={game.price}
            />
          ))}
      </div>
    </div>
  )
}

export default GameContainer
