import React from 'react'
import { Shield, Banknote, BadgeCheck, RotateCcw } from 'lucide-react';

const FeatureCard = ({icon1,icon2,icon3,icon4}) => {

// testing

    const value = [
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Secure Payments",
            description: "SSL Encrypted Checkout for 100% security"
        },
        {
            icon: <Banknote className="w-8 h-8" />,
            title: "Cash on Delivery",
            description: "Pay conveniently when your order arrives"
        },
        {
            icon: <BadgeCheck className="w-8 h-8" />,
            title: "1-Year Warranty",
            description: "Comprehensive official brand coverage"
        },
        {
            icon: <RotateCcw className="w-8 h-8" />,
            title: "Easy Returns",
            description: "7-Day No Questions Asked return policy"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {value.map((benefit, index) => (
                <div
                    key={index}
                    className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/60 hover:border-slate-600/50 transition-all duration-300 group flex flex-col items-center text-center"
                >
                    {/* Icon */}
                    <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors duration-300">
                        <div className="text-cyan-400">
                            {benefit.icon}
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-white font-semibold text-xl mb-3">
                        {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed">
                        {benefit.description}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default FeatureCard
