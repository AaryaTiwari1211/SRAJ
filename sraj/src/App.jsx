import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home'
import Orders from './pages/orders/Orders'
import Cart from './pages/cart/Cart'
import ContactUs from './pages/contactus/ContactUs'
import AboutUs from './pages/aboutus/AboutUs'
import Login from './pages/auth/login/Login';
import Register from './pages/auth/register/Register';
import ResetPassword from './pages/auth/reset/ResetPassword';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <BrowserRouter>
      <ToastContainer />
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
