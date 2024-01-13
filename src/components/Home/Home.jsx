import React, { Suspense, useEffect, useState } from "react"
import GameContainer from "../GameContainer"
import { useGameData } from "../../contexts/GameDataContext"
import GameContainerSkeleton from "../GameContainerSkeleton"

const Home = () => {
  const { gameData, updateGameData, isPriceAdded, updateIsPriceAdded } =
    useGameData()

  const apiUrl = "https://api.rawg.io/api/games"
  const apiKey = import.meta.env.VITE_API_KEY

  const getData = async () => {
    await fetch(`${apiUrl}?key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        updateGameData(data.results)
      })
      .catch((error) => {
        console.error("Error fetching data:", error)
      })
  }

  useEffect(() => {
    if (gameData.length == 0) {
      getData()
    }
  }, [])

  const generateRandomPrice = () => {
    const minPrice = 10
    const maxPrice = 60
    return (Math.random() * (maxPrice - minPrice) + minPrice).toFixed(2)
  }

  const addDummyPrices = () => {
    return (games) => {
      return games.map((game) => ({
        ...game,
        price: generateRandomPrice(),
      }))
    }
  }

  useEffect(() => {
    if (!isPriceAdded && gameData.length > 0) {
      const gamesWithPrices = addDummyPrices(gameData)
      updateGameData(gamesWithPrices)

      console.log(gameData)
      updateIsPriceAdded()
    }
  }, [gameData])

  return (
    <div>
      <Suspense fallback={<div className="bg-white">loading..</div>}>
        {isPriceAdded ? <GameContainer /> : <GameContainerSkeleton />}
      </Suspense>
    </div>
  )
}

export default Home
