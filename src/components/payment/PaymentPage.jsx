import React, { useState } from 'react';
import Footer from '../layouts/Footer';
import PaymentMethode from './PaymentMethode';
import OrderSummary from './OrderSummary';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const PaymentPage = () => {
    
    const navigate = useNavigate()
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [cardDetails, setCardDetails] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardholderName: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'cardNumber') {
            const formattedValue = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
            setCardDetails({ ...cardDetails, [name]: formattedValue });
        } else if (name === 'expiryDate') {
            const formattedValue = value.replace(/\s/g, '').replace(/(\d{2})(\d{0,2})/, '$1 / $2').trim();
            setCardDetails({ ...cardDetails, [name]: formattedValue });
        } else {
            setCardDetails({ ...cardDetails, [name]: value });
        }
    };

    const orderDetails = {
        productName: 'Sonic Pro WH-1000XMS Wireless Headphones',
        color: 'Midnight Black',
        price: 1499.00,
        shipping: 0,
        tax: 0.00
    };

    const handlePayment = () => {
        if (cardDetails.cardNumber === '' || cardDetails.expiryDate === "" || cardDetails.cvv === '' ||
            cardDetails.cardholderName === '' ) {
            toast.error("All fields are required!")
            return
        }
        console.log(cardDetails)
        navigate("/orderplaced")
        toast.success("Order Placed Successfully!")
    }

    const total = orderDetails.price + orderDetails.shipping + orderDetails.tax;

    return (
        <div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">

            <header className="bg-slate-900/95 backdrop-blur-md border-b border-slate-800 py-4">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center gap-2 hover:cursor-pointer"
                        onClick={() => {
                            navigate("/")
                        }}
                    >
                        <div className="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center transform rotate-45">
                            <div className="w-4 h-4 bg-slate-900 transform -rotate-45"></div>
                        </div>
                        <span className="text-white text-2xl font-bold">SonicPro</span>
                    </div>
                </div>
            </header>


            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    <PaymentMethode paymentMethod={paymentMethod} cardDetails={cardDetails} handleInputChange={handleInputChange} total={total} handlePayment={handlePayment} />

                    <OrderSummary cardDetails={cardDetails} orderDetails={orderDetails} total={total} />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default PaymentPage;