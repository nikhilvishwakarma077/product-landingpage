import React from 'react'
import LandingPage from './pages/LandingPage'
import { Routes,Route } from 'react-router-dom'
import OrderPage from './components/order/OrderPage'
import PaymentPage from './components/payment/PaymentPage'
import OrderConfirmationPage from './components/orderconfirmation/OrderConfirmationPage'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/order' element={<OrderPage />} />
      <Route path='/payment' element={<PaymentPage />} />
      <Route path='/confirm' element={<OrderConfirmationPage />} />
    </Routes>

    </>
    
  )
}

export default App
