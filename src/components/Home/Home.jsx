import React, { Suspense, useEffect, useState } from "react"
import GameContainer from "../GameContainer"
import { useGameData } from "../../contexts/GameDataContext"

const Home = () => {
  const { gameData, updateGameData } = useGameData()
  const apiUrl = "https://api.rawg.io/api/games"
  const apiKey = import.meta.env.VITE_API_KEY

  const getData = () => {
    fetch(`${apiUrl}?key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        updateGameData(data.results)
      })
      .catch((error) => {
        console.error("Error fetching data:", error)
      })
  }

  console.log("render home")

  // useEffect(() => {
  //   if (gameData.length == 0) {
  //     getData()

  //     console.log("useeffect runnning from home")
  //   }
  // }, [])

  useEffect(() => {
    const fetchData = async () => {
      if (gameData.length === 0) {
        await getData()
        console.log("useEffect running from Home")
      }
    }

    fetchData()
  }, [gameData])

  return (
    <div>
      <Suspense fallback={<div className="bg-white">loading..</div>}>
        {gameData.length > 0 && <GameContainer />}
      </Suspense>
    </div>
  )
}

export default Home
