import React from 'react'

const Feature = ({ icon, title }) => {
  return (
    <div className="px-3 py-4 flex items-start gap-4 border border-[#3B4B54] rounded-2xl">
      <div className="text-[#9DB0B9] text-xl mt-1">{icon}</div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  )
}

export default Feature
