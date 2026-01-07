import React, { useContext } from 'react';
import { ShieldCheck } from 'lucide-react';
import { images } from '../../data/appData';
import { AppContext } from '../../context/AppContext';

const OrderSummary = () => {

    const { grandTotal, orderDetails, quantity } = useContext(AppContext)
    return (
        <div className="lg:col-span-1">
            <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sticky top-20">
                <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>

                <div className="flex gap-4 mb-6 pb-6 border-b border-slate-700">
                    <div className="w-20 h-20 bg-slate-700 rounded-lg flex items-center justify-center">
                        <img
                            src={images.productImg}
                            alt="Product"
                            className="w-full h-full object-contain rounded"
                        />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-white font-semibold mb-1">
                            {orderDetails.productName}
                        </h3>
                        <p className="text-slate-400 text-sm mb-2">Color: {orderDetails.color}</p>
                        <p className="text-white font-bold">₹{orderDetails.price.toFixed(2)} x {quantity}</p>
                    </div>
                </div>

                <div className="mb-6 pb-6 border-b border-slate-700">
                    <div className=" mb-2">
                        <span className="text-slate-400 text-sm">SHIP TO</span>
                    </div>
                    <p className="text-white font-semibold mb-1">{orderDetails.fullName}</p>
                    <p className="text-slate-400 text-sm">{orderDetails.streetAddress}</p>
                    <p className="text-slate-400 text-sm">{orderDetails.city}, {orderDetails.state} {orderDetails.code}</p>
                </div>



                <div className="flex justify-between text-xl font-bold text-white pt-4 border-t border-slate-700 mb-6">
                    <span>Total</span>
                    <span>₹{grandTotal.toFixed(2)}</span>
                </div>

                <div className="bg-slate-700/30 rounded-lg p-4 flex gap-3">
                    <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                        <h4 className="text-white font-semibold text-sm mb-1">
                            30-Day Money Back Guarantee
                        </h4>
                        <p className="text-slate-400 text-xs">
                            If you're not completely satisfied, return it within 30 days for a full refund.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary
