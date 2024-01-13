import React from "react"

const GameCardSkeleton = () => {
  return (
    <div className="w-full bg-[#212021] max-w-md mx-auto text-white rounded-md overflow-hidden shadow-lg transition-transform transform hover:scale-110 cursor-pointer">
      {/* Placeholder image */}
      <div className="w-full h-48 bg-[#212021] rounded-t-md"></div>

      <div className="flex flex-col gap-2 px-4 py-4">
        <div className="flex text-sm justify-between text-slate-300">
          {/* Button placeholder */}
          <div className="w-20 h-4 bg-zinc-700"></div>

          {/* Price placeholder */}
          <div className="w-10 h-4 bg-zinc-700"></div>
        </div>
        <div className="w-36 h-4 bg-zinc-700"></div>
      </div>
    </div>
  )
}

const GameContainerSkeleton = () => {
  // Placeholder games for the skeleton
  const placeholderGames = Array.from({ length: 8 }, (_, index) => index)

  return (
    <div className="max-w-auto mx-auto py-8 px-8 lg:px-20 xl:px-25">
      <h1 className=" text-white font-semibold text-4xl mx-auto py-10">
        Discover Games
      </h1>
      <div className="container grid gap-12 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {placeholderGames.map((index) => (
          <GameCardSkeleton key={index} />
        ))}
      </div>
    </div>
  )
}

export default GameContainerSkeleton
