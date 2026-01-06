import React from 'react'

const Badges = () => {
  return (
    <div className="flex flex-wrap items-center gap-4">
          <button className="border border-[#289FDA] rounded-full px-5 py-2 text-[#289FDA] bg-[#122B36] text-sm">
            ⚡︎ New Release
          </button>
          <button className="border border-[#289FDA] rounded-full px-5 py-2 text-[#848F99] bg-[#18252D] text-sm">
            ⭐ Top Rated 2025
          </button>
        </div>
  )
}

export default Badges
