import React from 'react';
import { CheckCircle, Headphones, CreditCard, Truck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OrderConfirmationPage = () => {
    const navigate = useNavigate()

    const orderDetails = {
        orderId: '#ORD-8492',
        productName: 'SonicX Pro Wireless Headphones',
        productColor: 'Midnight Blue',
        amount: 1499.00,
        paymentMethod: 'Visa ending in 4242',
        shippingAddress: '456 Cyber City Road, DLF Phase II,'
    };

    const orderSteps = [
        { id: 1, label: 'Confirmed', status: 'completed', icon: CheckCircle },
        { id: 2, label: 'Preparing', status: 'active', icon: Headphones },
        { id: 3, label: 'Shipped', status: 'pending', icon: Truck }
    ];

    return (
        <div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">

            {/* Main Content */}
            <div className="max-w-3xl mx-auto px-6 py-5">
                {/* Success Icon */}
                <div className="flex justify-center mb-8">
                    <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center">
                        <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-10 h-10 text-white" />
                        </div>
                    </div>
                </div>

                {/* Success Message */}
                <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
                    Order Placed Successfully
                </h1>
                <p className="text-slate-400 text-center text-lg mb-12">
                    Thank you for your purchase. Here are order details.
                </p>

                {/* Order Details Card */}
                <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 mb-8">
                    {/* Product Info */}
                    <div className="flex gap-4 pb-6 border-b border-slate-700 mb-6">
                        <div className="w-20 h-20 bg-slate-700/50 rounded-lg flex items-center justify-center">
                            <img
                                src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtczczLXBhaS0xNjMtbW9ja3VwLmpwZw.jpg"
                                alt="Product"
                                className="w-full h-full object-contain rounded-lg"
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-white font-semibold text-lg mb-1">
                                {orderDetails.productName}
                            </h3>
                            <p className="text-slate-400 text-sm">{orderDetails.productColor}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-white font-bold text-xl">₹{orderDetails.amount.toFixed(2)}</p>
                        </div>
                    </div>

                    {/* Order Info Grid */}
                    <div className="grid grid-cols-1  md:grid-cols-3 gap-6">
                        {/* Order ID */}
                        <div>
                            <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">Order ID</p>
                            <p className="text-cyan-400 font-semibold text-lg">{orderDetails.orderId}</p>
                        </div>

                        {/* Amount Paid */}
                        <div>
                            <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">Amount Paid</p>
                            <p className="text-white font-semibold text-lg">₹{orderDetails.amount.toFixed(2)}</p>
                        </div>

                        {/* Payment Method */}
                        {/* <div>
                            <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">Payment Method</p>
                            <div className="flex items-center gap-2">
                                <CreditCard className="w-4 h-4 text-slate-400" />
                                <p className="text-white">{orderDetails.paymentMethod}</p>
                            </div>
                        </div> */}

                        {/* Shipping To */}
                        <div>
                            <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">Shipping To</p>
                            <p className="text-white">{orderDetails.shippingAddress}</p>
                        </div>
                    </div>
                </div>

                {/* Order Progress */}


                {/* Help Section */}
                <div className="text-center mb-8">

                    <div className="flex justify-center gap-4 text-sm">
                        <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                            support@sonicx.com
                        </a>
                        <span className="text-slate-600">•</span>
                        <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                            Return Policy
                        </a>
                    </div>
                </div>

                {/* Back to Home Button */}
                <div className="flex justify-center">
                    <button className="px-8 py-3 bg-slate-800/60 hover:bg-slate-700 border border-slate-700 text-white font-semibold rounded-xl transition-all duration-300"
                        onClick={() => {
                            navigate("/")
                        }}
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmationPage;