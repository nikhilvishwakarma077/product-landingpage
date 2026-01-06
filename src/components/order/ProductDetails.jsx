import React, { useState } from 'react'
import { Minus, Plus, CheckCircle, Battery, Bluetooth } from 'lucide-react';

const ProductDetails = ({ quantity, pricePerItem, handleQuantityChange }) => {

    return (
        <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
            <div className="bg-linear-to-br from-emerald-900/40 to-slate-800 rounded-2xl mb-6 relative overflow-hidden">
                <span className="absolute top-4 left-4 px-3 py-1 z-10 bg-cyan-400 text-slate-900 text-xs font-bold rounded-full">
                    BEST SELLER
                </span>
                <div className="aspect-square flex items-center justify-center">
                    <img
                        src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtczczLXBhaS0xNjMtbW9ja3VwLmpwZw.jpg"
                        alt="SonicPro Wireless Headphones"
                        className="w-full h-full object-contain drop-shadow-2xl"
                    />
                </div>
            </div>

            <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                    SonicPro Wireless Headphones
                </h2>
                <p className="text-slate-400 text-sm mb-4">
                    Midnight Black • Model WH-1000XMS
                </p>

                <div className="flex items-center justify-between mb-6">
                    <div>
                        <span className="text-slate-500 line-through text-lg mr-2">₹{(pricePerItem.toFixed(2)) * 2 + 1}</span>
                        <span className="text-3xl font-bold text-white">₹{pricePerItem.toFixed(2)}</span>
                    </div>

                    <div className="flex items-center gap-3 bg-slate-700/50 rounded-lg px-4 py-2">
                        <button
                            onClick={() => handleQuantityChange('decrement')}
                            className="text-slate-400 hover:text-white transition-colors"
                        >
                            <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-white font-semibold w-8 text-center">{quantity}</span>
                        <button
                            onClick={() => handleQuantityChange('increment')}
                            className="text-slate-400 hover:text-white transition-colors"
                        >
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="space-y-3">
                <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                        <h4 className="text-white font-semibold text-sm">Active Noise Cancelling</h4>
                        <p className="text-slate-400 text-xs">Immersive sound in any environment</p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <Battery className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                        <h4 className="text-white font-semibold text-sm">40-Hour Battery Life</h4>
                        <p className="text-slate-400 text-xs">Listen all day on a single charge</p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <Bluetooth className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                        <h4 className="text-white font-semibold text-sm">Instant Pairing</h4>
                        <p className="text-slate-400 text-xs">Seamless connection with Bluetooth 5.2</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
