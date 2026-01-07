import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export const AppContext = createContext()

const AppProvider = ({ children }) => {

    const navigate = useNavigate()
    const pricePerItem = 1499.00;
    const [quantity, setQuantity] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        streetAddress: '',
        city: '',
        state: '',
        zipCode: '',
        productName: "SonicPro Wireless Headphones",
        color: "Midnight Blue",
        model: "WH-1000XMS",
        price: pricePerItem,

    });

    const [orderDetails, setOrderDetails] = useState(formData)


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

        setOrderDetails(formData)
        navigate("/payment")

    }

    const value = {
        quantity, setQuantity, formData, setFormData, handleQuantityChange, handleInputChange, subtotal, grandTotal, pricePerItem, proceedToPayment, orderDetails
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider