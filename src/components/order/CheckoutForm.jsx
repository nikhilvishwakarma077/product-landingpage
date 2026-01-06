import React from 'react';
import { User, Phone, Mail, Lock, Shield,Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({formData,handleInputChange,subtotal,grandTotal}) => {

    const navigate = useNavigate()

    return (
        <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-2">Customer Details</h2>
            <p className="text-slate-400 text-sm mb-6">
                Complete your details below to finalize your order.
            </p>

            <div className="space-y-4 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="text-slate-300 text-sm font-medium mb-2 block">
                            Full Name
                        </label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                placeholder="Virat Kohli"
                                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg pl-11 pr-4 py-3 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-slate-300 text-sm font-medium mb-2 block">
                            Phone Number
                        </label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="+91 0000-0000-00"
                                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg pl-11 pr-4 py-3 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <label className="text-slate-300 text-sm font-medium mb-2 block">
                        Email Address <span className="text-slate-500">(Optional)</span>
                    </label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="virat@example.com"
                            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg pl-11 pr-4 py-3 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        />
                    </div>
                </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-4">Delivery Address</h3>
            <div className="space-y-4 mb-6">
                <div>
                    <label className="text-slate-300 text-sm font-medium mb-2 block">
                        Street Address
                    </label>
                    <div className="relative">
                        <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
                        <input
                            type="text"
                            name="streetAddress"
                            value={formData.streetAddress}
                            onChange={handleInputChange}
                            placeholder="123 Main St, Apt 4B"
                            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg pl-11 pr-4 py-3 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="text-slate-300 text-sm font-medium mb-2 block">City</label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="Gurgaon"
                            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        />
                    </div>

                    <div>
                        <label className="text-slate-300 text-sm font-medium mb-2 block">State</label>
                        <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            placeholder="Delhi"
                            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        />
                    </div>

                    <div>
                        <label className="text-slate-300 text-sm font-medium mb-2 block">Zip Code</label>
                        <input
                            type="text"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            placeholder="122001"
                            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                        />
                    </div>
                </div>
            </div>

            <div className="border-t border-slate-700 pt-6 space-y-3 mb-6">
                <div className="flex justify-between text-slate-400">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                    <span>Shipping</span>
                    <span className="text-green-400 font-semibold">Free</span>
                </div>

                <div className="flex justify-between text-xl font-bold text-white pt-3 border-t border-slate-700">
                    <span>Grand Total</span>
                    <span>₹{grandTotal.toFixed(2)}</span>
                </div>
            </div>

            <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-white font-semibold text-lg py-4 rounded-xl transition-all duration-300  mb-4 flex items-center justify-center gap-2 hover:cursor-pointer"
                onClick={() => {
                    navigate("/payment")
                }}
            >
                Proceed to Payment
                <span>→</span>
            </button>

            <div className="flex items-center justify-center gap-4 text-slate-500 text-xs">
                <div className="flex items-center gap-1">
                    <Lock className="w-3 h-3" />
                    <span>SECURE CHECKOUT</span>
                </div>
                <div className="flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    <span>MONEY-BACK GUARANTEE</span>
                </div>
            </div>
        </div>
    )
}

export default CheckoutForm
