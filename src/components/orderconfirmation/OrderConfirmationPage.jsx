import React from 'react';
import { CheckCircle} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import OrderDetails from './OrderDetails';

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


    return (
        <div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">

            <div className="max-w-3xl mx-auto px-6 py-5">
                <div className="flex justify-center mb-8">
                    <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center">
                        <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-10 h-10 text-white" />
                        </div>
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
                    Order Placed Successfully
                </h1>
                <p className="text-slate-400 text-center text-lg mb-12">
                    Thank you for your purchase. Here are order details.
                </p>

                <OrderDetails orderDetails={orderDetails} />

                <div className="text-center mb-8">

                    <div className="flex justify-center gap-4 text-sm">
                        <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                            support@gmail.com
                        </a>
                        <span className="text-slate-600">•</span>
                        <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                            Return Policy
                        </a>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button className="px-8 py-3 bg-slate-800/60 hover:bg-slate-700 border border-slate-500 text-white font-semibold rounded-xl transition-all duration-300"
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