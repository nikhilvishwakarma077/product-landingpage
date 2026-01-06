import React from 'react'
import { Award } from 'lucide-react'

const RatedBy = () => {
    return (
        <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 flex flex-col items-center justify-center">
            <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-cyan-400" />
            </div>
            <div className="text-5xl font-bold text-white mb-2">#1</div>
            <p className="text-slate-400">Rated by AudioWeekly</p>
        </div>
    )
}

export default RatedBy
