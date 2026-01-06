import React from 'react'
import { useNavigate } from 'react-router-dom'

const CTAbutton = ({text}) => {
    const navigate = useNavigate()
    return (
        <div className="flex justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-8 py-4 rounded-xl flex items-center gap-2 transition-all  active:scale-105"
            onClick={()=>{
                        navigate("/order")
                    }}
            >
                {text}
            </button>
        </div>
    )
}

export default CTAbutton
