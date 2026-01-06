import React from 'react'

const Headline = () => {
  return (
    <div>
      <p className="font-semibold leading-tight">
        <span className="block text-4xl sm:text-5xl md:text-7xl text-white">
          Silence the <br /> World.
        </span>
        <span className="block text-4xl sm:text-5xl md:text-7xl text-[#37ABF0]">
          Hear the Music.
        </span>
      </p>

      <p className="text-sm md:text-md mt-4 text-[#79889A] max-w-xl">
        Experience studio-quality sound with next-gen Active Noise Cancellation. Designed for all-day comfort and deep immersion.
      </p>
    </div>
  )
}

export default Headline
