import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../layouts/Footer';
import ProductDetails from './ProductDetails';
import CheckoutForm from './CheckoutForm';
import { toast } from 'react-toastify';

const OrderPage = () => {

    const navigate = useNavigate()
    const [quantity, setQuantity] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        streetAddress: '',
        city: '',
        state: '',
        zipCode: ''
    });

    const pricePerItem = 1499.00;
    const shipping = 0;


    const subtotal = pricePerItem * quantity;
    const grandTotal = subtotal + shipping;

    const handleQuantityChange = (type) => {
        if (type === 'increment') {
            setQuantity(quantity + 1);
        } else if (type === 'decrement' && quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const proceedToPayment = () => {

        if (formData.fullName === '' || formData.phone === "" || formData.streetAddress === '' ||
            formData.city === '' || formData.state === '' || formData.zipCode === ''
        ) {
            toast.error("All fields are required!")
            return
        }

        console.log(formData)
        navigate("/payment")

    }


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


            <div className="max-w-7xl mx-auto px-6 py-3">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    <ProductDetails quantity={quantity} pricePerItem={pricePerItem} handleQuantityChange={handleQuantityChange} />

                    <CheckoutForm formData={formData} handleInputChange={handleInputChange} subtotal={subtotal} grandTotal={grandTotal} proceedToPayment={proceedToPayment} />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default OrderPage;