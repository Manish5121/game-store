import React, { useEffect, useMemo, useState } from "react"
import GameCard from "./GameCard"
import { useSearch } from "../contexts/SearchContext"
import { useGameData } from "../contexts/GameDataContext"
import getData from "../api/api"

const GameContainer = React.memo(() => {
  const { gameData, updateGameData } = useGameData()
  const { searchQuery } = useSearch()

  const handleAddToCart = (gameId, isAdded) => {
    const updatedGameData = gameData.map((game) =>
      game.id === gameId ? { ...game, isAdded: isAdded } : game
    )

    updateGameData(updatedGameData)
  }
  // const generateRandomPrice = () => {
  //   const minPrice = 10
  //   const maxPrice = 60
  //   return (Math.random() * (maxPrice - minPrice) + minPrice).toFixed(2)
  // }

  // const addDummyPrices = useMemo(() => {
  //   return (games) => {
  //     return games.map((game) => ({
  //       ...game,
  //       price: generateRandomPrice(),
  //     }))
  //   }
  // }, [])

  // useEffect(() => {
  //   console.log("useE inside container")

  //   if (gameData.length > 0) {
  //     const gamesWithPrices = addDummyPrices(gameData)
  //     updateGameData(gamesWithPrices)
  //   }
  // }, []) // Include addDummyPrices in the dependency array

  const filteredGames = useMemo(() => {
    return gameData.filter((game) =>
      game.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [gameData, searchQuery])

  return (
    <div className=" max-w-auto mx-auto py-8 px-8 lg:px-20 xl:px-25">
      <h1 className=" text-white font-semibold text-4xl mx-auto py-10">
        Discover Games
      </h1>
      <div className="container  grid gap-12 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {filteredGames &&
          filteredGames.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              onAddToCart={(gameId, isAdded) =>
                handleAddToCart(gameId, isAdded)
              }
            />
          ))}
      </div>
    </div>
  )
})

export default GameContainer
