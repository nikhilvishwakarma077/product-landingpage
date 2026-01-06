import React, { useState } from 'react';
import { CreditCard, Lock, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PaymentMethode = ({ paymentMethod, cardDetails, handleInputChange, total }) => {
    const navigate = useNavigate()

    return (
        <div className="lg:col-span-2 space-y-6">
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-white mb-2">Payment Method</h1>

            </div>


            <div className={`bg-slate-800/40 backdrop-blur-sm border-2 rounded-2xl p-6 transition-all duration-300 ${paymentMethod === 'card' ? 'border-cyan-400' : 'border-slate-700/50'
                }`}>
                <div className="flex items-center gap-3 mb-6">
                    <input
                        type="radio"
                        id="card"
                        name="paymentMethod"
                        checked={paymentMethod === 'card'}
                        onChange={() => setPaymentMethod('card')}
                        className="w-5 h-5 text-cyan-400 focus:ring-cyan-400"
                    />
                    <label htmlFor="card" className="flex items-center gap-2 text-white font-semibold cursor-pointer flex-1">
                        <CreditCard className="w-5 h-5" />
                        Credit or Debit Card
                    </label>
                    <div className="flex gap-2">
                        <div className="w-8 h-6 bg-slate-700 rounded flex items-center justify-center">
                            <CreditCard className="w-4 h-4 text-slate-400" />
                        </div>
                        <div className="w-8 h-6 bg-slate-700 rounded flex items-center justify-center">
                            <CreditCard className="w-4 h-4 text-slate-400" />
                        </div>
                    </div>
                </div>

                {paymentMethod === 'card' && (
                    <div className="space-y-4">

                        <div>
                            <label className="text-slate-400 text-xs uppercase tracking-wider mb-2 block">
                                Card Number
                            </label>
                            <div className="relative">
                                <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
                                <input
                                    type="text"
                                    name="cardNumber"
                                    value={cardDetails.cardNumber}
                                    onChange={handleInputChange}
                                    placeholder="0000 0000 0000 0000"
                                    maxLength="19"
                                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg pl-11 pr-11 py-3 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                                />
                                <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
                            </div>
                        </div>


                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-slate-400 text-xs uppercase tracking-wider mb-2 block">
                                    Expiry Date
                                </label>
                                <input
                                    type="text"
                                    name="expiryDate"
                                    value={cardDetails.expiryDate}
                                    onChange={handleInputChange}
                                    placeholder="MM / YY"
                                    maxLength="7"
                                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                                />
                            </div>
                            <div>
                                <label className="text-slate-400 text-xs uppercase tracking-wider mb-2 block">
                                    CVC / CVV
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="cvv"
                                        value={cardDetails.cvv}
                                        onChange={handleInputChange}
                                        placeholder="123"
                                        maxLength="4"
                                        className="w-full bg-slate-700/50 border border-slate-600 rounded-lg pl-4 pr-11 py-3 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                                    />
                                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-slate-600 rounded flex items-center justify-center">
                                        <span className="text-slate-400 text-xs">?</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div>
                            <label className="text-slate-400 text-xs uppercase tracking-wider mb-2 block">
                                Cardholder Name
                            </label>
                            <input
                                type="text"
                                name="cardholderName"
                                value={cardDetails.cardholderName}
                                onChange={handleInputChange}
                                placeholder="Virat Kohli"
                                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                            />
                        </div>
                    </div>
                )}
            </div>


            <div className="flex items-center gap-2 text-cyan-400 text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>Your payment is 100% secure</span>
            </div>

            <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-white font-semibold text-lg py-4 rounded-xl transition-all duration-300  flex items-center justify-center gap-2 hover:cursor-pointer"
                onClick={() => {
                    navigate("/confirm")
                }}
            >
                <Lock className="w-5 h-5" />
                Pay Securely ${total.toFixed(2)}
            </button>


        </div>
    )
}

export default PaymentMethode
