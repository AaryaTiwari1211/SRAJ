import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home'
import Orders from './pages/orders/Orders'
import Cart from './pages/cart/Cart'
import ContactUs from './pages/contactus/ContactUs'
import AboutUs from './pages/aboutus/AboutUs'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
