import React, { useEffect, useState } from "react"

import GameContainer from "../GameContainer"

const Home = () => {
  const [gameData, setGameData] = useState([])
  const apiUrl = "https://api.rawg.io/api/games"
  const apiKey = import.meta.env.VITE_API_KEY

  const getData = () => {
    fetch(`${apiUrl}?key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setGameData(data.results)
        console.log(data.results)
      })
      .catch((error) => {
        console.error("Error fetching data:", error)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <GameContainer gameData={gameData} />
    </div>
  )
}

export default Home
