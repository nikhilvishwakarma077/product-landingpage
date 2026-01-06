import React from 'react'

const BadgeButton = ({text}) => {
  return (
    <div className="flex justify-center mb-8">
        <span className="px-4 py-1.5 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium tracking-wider">
          {text}
        </span>
      </div>
  )
}

export default BadgeButton
