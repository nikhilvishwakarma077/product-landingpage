import React, { useState } from 'react'
import { Star, Zap, Battery, Truck, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RightColumn = () => {
    const navigate = useNavigate()
    const [selectedColor, setSelectedColor] = useState('midnight');

    const colors = [
        { name: 'Midnight', value: 'midnight', bg: 'bg-slate-800', border: 'border-slate-600' },
        { name: 'Silver', value: 'silver', bg: 'bg-slate-300', border: 'border-slate-400' },
        { name: 'Electric', value: 'electric', bg: 'bg-cyan-400', border: 'border-cyan-500' }
    ];



    const features = [
        { icon: <CheckCircle className="w-5 h-5" />, text: 'Active Noise Cancelling' },
        { icon: <Zap className="w-5 h-5" />, text: 'Ultra-Low Latency' },
        { icon: <Battery className="w-5 h-5" />, text: '40h Battery Life' },
        { icon: <Truck className="w-5 h-5" />, text: 'Free 2-Day Shipping' }
    ];
    return (
        <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-semibold tracking-wider">
                    NEW RELEASE
                </span>
                <div className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-white font-semibold">4.9</span>
                    <span className="text-slate-400">(3,428 Reviews)</span>
                </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Sonic Pro Wireless
            </h1>

            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Studio-quality sound, reimagined for your daily life. Experience pure silence with next-gen ANC.
            </p>

            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-slate-400 text-sm">Total Price</span>
                    <span className="px-3 py-1 bg-cyan-500 text-white text-xs font-semibold rounded-full">
                        Limited Time Offer
                    </span>
                </div>

                <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-5xl font-bold text-cyan-400">₹1499</span>
                    <span className="text-2xl text-slate-500 line-through">₹2999</span>
                </div>

                <p className="text-slate-400 text-sm">Free 2-day shipping included</p>
            </div>

            <div className="mb-6">
                <label className="text-white font-semibold mb-4 block">Select Color</label>
                <div className="flex gap-4">
                    {colors.map((color) => (
                        <button
                            key={color.value}
                            onClick={() => setSelectedColor(color.value)}
                            className="flex flex-col items-center gap-2 group"
                        >
                            <div
                                className={`w-12 h-12 rounded-full ${color.bg} border-2 ${selectedColor === color.value
                                    ? 'ring-2 ring-cyan-400 ring-offset-2 ring-offset-slate-900 ' + color.border
                                    : color.border + ' opacity-60 group-hover:opacity-100'
                                    } transition-all duration-300`}
                            />
                            <span
                                className={`text-sm ${selectedColor === color.value ? 'text-white' : 'text-slate-500'
                                    }`}
                            >
                                {color.name}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-white font-semibold text-lg py-4 rounded-xl transition-all duration-300 mb-6"
                onClick={() => {
                    navigate("/order")
                }}
            >
                Buy Now - ₹1499
            </button>

            <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-cyan-400">
                        {feature.icon}
                        <span className="text-slate-300 text-sm">{feature.text}</span>
                    </div>
                ))}
            </div>

            <p className="text-slate-500 text-xs text-center mt-8">
                Includes protective carrying case and braided USB-C cable.
            </p>
        </div>
    )
}

export default RightColumn
