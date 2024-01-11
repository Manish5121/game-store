import React, { createContext, useContext, useState } from "react"

const GameDataContext = createContext()

export const GameDataProvider = ({ children }) => {
  const [gameData, setGameData] = useState([])

  const updateGameData = (newGameData) => {
    setGameData(newGameData)
  }

  return (
    <GameDataContext.Provider value={{ gameData, updateGameData }}>
      {children}
    </GameDataContext.Provider>
  )
}

export const useGameData = () => {
  return useContext(GameDataContext)
}
