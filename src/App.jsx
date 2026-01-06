import React from 'react'
import LandingPage from './pages/LandingPage'
import { Routes, Route } from 'react-router-dom'
import OrderPage from './components/order/OrderPage'
import PaymentPage from './components/payment/PaymentPage'
import OrderConfirmationPage from './components/orderconfirmation/OrderConfirmationPage'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/order' element={<OrderPage />} />
        <Route path='/payment' element={<PaymentPage />} />
        <Route path='/orderplaced' element={<OrderConfirmationPage />} />
      </Routes>

    </>

  )
}

export default App
