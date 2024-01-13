import React, { createContext, useContext, useState } from "react"

const GameDataContext = createContext()

export const GameDataProvider = ({ children }) => {
  const [gameData, setGameData] = useState([])
  const [isPriceAdded, setIsPriceAdded] = useState(false)

  const updateIsPriceAdded = () => {
    setIsPriceAdded(true)
  }

  const updateGameData = (newGameData) => {
    setGameData(newGameData)
  }

  return (
    <GameDataContext.Provider
      value={{ gameData, updateGameData, isPriceAdded, updateIsPriceAdded }}
    >
      {children}
    </GameDataContext.Provider>
  )
}

export const useGameData = () => {
  return useContext(GameDataContext)
}
