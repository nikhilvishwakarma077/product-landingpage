import React from 'react'
import { Star } from 'lucide-react';

const Rating = () => {

    const ratingBars = [
        { stars: 5, percentage: 85 },
        { stars: 4, percentage: 10 },
        { stars: 3, percentage: 3 },
        { stars: 2, percentage: 1 },
        { stars: 1, percentage: 1 }
    ];

    return (
        <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
            <div className="flex items-start gap-6">
                <div>
                    <div className="text-6xl font-bold text-white mb-2">4.9</div>
                    <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`w-5 h-5 ${i < 4 ? 'fill-cyan-400 text-cyan-400' : 'fill-slate-600 text-slate-600'}`}
                            />
                        ))}
                    </div>
                    <p className="text-slate-400 text-sm">Based on 3,428 reviews</p>
                </div>

                <div className="flex-1 space-y-2">
                    {ratingBars.map((bar) => (
                        <div key={bar.stars} className="flex items-center gap-2">
                            <span className="text-slate-400 text-sm w-3">{bar.stars}</span>
                            <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-cyan-500 rounded-full"
                                    style={{ width: `${bar.percentage}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Rating
