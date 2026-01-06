import React from 'react'
import { Mic, Battery, Bluetooth, Headphones } from 'lucide-react';

const FeatureCards = () => {

    const features = [
        {
            icon: <Mic className="w-6 h-6" />,
            title: "ACTIVE NOISE CANCELLATION",
            description: "Block out the world completely and focus purely on your music."
        },
        {
            icon: <Battery className="w-6 h-6" />,
            title: "40-HOUR BATTERY LIFE",
            description: "Play continuously for days on a single rapid charge."
        },
        {
            icon: <Bluetooth className="w-6 h-6" />,
            title: "BLUETOOTH 5.3",
            description: "Instant pairing, stable connection, and lag-free audio streaming."
        },
        {
            icon: <Headphones className="w-6 h-6" />,
            title: "ERGONOMIC COMFORT",
            description: "Designed with plush memory foam for all-day wear without pressure."
        }
    ];


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 ">
            {features.map((feature, index) => (
                <div
                    key={index}
                    className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/60 hover:border-slate-600/50 transition-all duration-300 group"
                >
                    {/* Icon */}
                    <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors duration-300">
                        <div className="text-cyan-400">
                            {feature.icon}
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-white font-semibold text-lg mb-3 tracking-wide">
                        {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed">
                        {feature.description}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default FeatureCards
