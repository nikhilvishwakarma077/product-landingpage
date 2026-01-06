import React from 'react'

const PageHeading = ({title,text}) => {
  return (
    <div>
        <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-6 ">
            {title}
          </h1>

          <p className="text-slate-400 text-center text-lg md:text-xl max-w-3xl mx-auto mb-16 ">
            {text}
          </p>
      
    </div>
  )
}

export default PageHeading
