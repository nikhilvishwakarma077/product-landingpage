import React from 'react'

const Buttons = () => {
  return (
     <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <button className="bg-[#2BADEE] hover:bg-[#1388c3] text-white px-6 py-4 rounded-lg font-semibold transition active:scale-95 w-full sm:w-auto hover:cursor-pointer">
            Buy Now - $299 →
          </button>

          <button className="bg-[#11222B] text-white text-sm border border-[#289FDA] px-5 py-2 rounded-lg font-semibold transition active:scale-95 w-full sm:w-auto text-left sm:text-center ">
            30-Hour Battery <br /> Quick Charge Cable
          </button>
        </div>
  )
}

export default Buttons
