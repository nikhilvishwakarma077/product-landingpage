import React, { useContext } from 'react'
import { images } from '../../data/appData'
import { AppContext } from '../../context/AppContext'

const OrderDetails = () => {

    const { grandTotal,quantity, orderDetails } = useContext(AppContext)
    const address = `${orderDetails.streetAddress} , ${orderDetails.city},${orderDetails.state},${orderDetails.zipCode} `

    const confirmedOrderDetails = {
        orderId: '#ORD-8492',
        productName: orderDetails.productName,
        productColor: orderDetails.color,
        amount: orderDetails.price,
        paymentMethod: 'Visa ending in 4242',
        shippingAddress: address,
    };

    return (
        <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 mb-8">
            <div className="flex gap-4 pb-6 border-b border-slate-700 mb-6">
                <div className="w-20 h-20 bg-slate-700/50 rounded-lg flex items-center justify-center">
                    <img
                        src={images.productImg}
                        alt="Product"
                        className="w-full h-full object-contain rounded-lg"
                    />
                </div>
                <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg mb-1">
                        {confirmedOrderDetails.productName}
                    </h3>
                    <p className="text-slate-400 text-sm">{confirmedOrderDetails.productColor}</p>
                    <p className="text-slate-400 text-sm">Quantity ({quantity}) </p>
                </div>
                <div className="text-right">
                    <p className="text-white font-bold text-xl">₹{confirmedOrderDetails.amount.toFixed(2)}</p>
                </div>
            </div>

            <div className="grid grid-cols-1  md:grid-cols-3 gap-6">
                <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">Order ID</p>
                    <p className="text-cyan-400 font-semibold text-lg">{confirmedOrderDetails.orderId}</p>
                </div>

                <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">Amount Paid</p>
                    <p className="text-white font-semibold text-lg">₹{grandTotal.toFixed(2)}</p>
                </div>



                <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">Shipping To</p>
                    <p className="text-white">{confirmedOrderDetails.shippingAddress}</p>
                </div>
            </div>
        </div>

    )
}

export default OrderDetails
