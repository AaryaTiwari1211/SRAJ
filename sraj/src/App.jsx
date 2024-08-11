import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, createBrowserRouter } from "react-router-dom";
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
import Navbar2 from './components/Navbar2/Navbar2';

import Product from './components/Products/Product'
import Sarees from './pages/products/Sarees'
import Lehengas from './pages/products/Lehengas'
import Kurtas from './pages/products/Kurtas'
import Suits from './pages/products/Suits'
import Linen from './pages/products/Linen'
import Jewellery from './pages/products/Jewellery'
import Bedsheets from './pages/products/Bedsheets'
import NightWear from './pages/products/NightWear'

import { getDocs, collection, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { db } from './firebase/firebase';

import { useMediaQuery } from '@mui/material';

import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Product2 from './components/Product2/Product2';
import Footer2 from './components/Footer2/Footer2';


async function fetchProducts() {
  try {
    const response = await axios.get("https://fakestoreapiserver.reactbd.com/products");
    const products = response.data;
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return null;
  }
}

function App() {

  const [products2, setProducts2] = useState([]);
  const [products, setProducts] = useState([]);
  const productCollection = collection(db, "Products")
  const md = useMediaQuery('(min-width:800px)')
  const getProducts = async () => {
    try {
      const data = await getDocs(productCollection)
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
      console.log(filteredData)
      setProducts2(filteredData)
    }
    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getProducts();
    async function fetchData() {
      const fetchedProducts = await fetchProducts();
      if (fetchedProducts) {
        setProducts(fetchedProducts);
      }
    }
    fetchData();
  }, [])
  return (
    <BrowserRouter>
      <ToastContainer />
      <Header />
      {
        md && <Navbar2 />
      }
      <div className="App">
        <Routes>
          <Route path="/" element={<Home products={products2} />} />
          <Route path="/products" element={<Home products={products2} />} />
          <Route path="/product/:id" element={<Product2 />} />
          <Route path="/products/sarees" element={<Sarees products1={products2} />} />
          <Route path="/products/lehengas" element={<Lehengas products1={products2} />} />
          <Route path="/products/nightwear" element={<NightWear products1={products2}/>} />
          <Route path="/products/jewellery" element={<Jewellery products1={products2}/>} />
          <Route path="/products/bedsheets" element={<Bedsheets products1={products2}/>} />
          <Route path="/products/kurtas" element={<Kurtas products1={products2}/>} />
          <Route path="/products/linen" element={<Linen products1={products2}/>} />
          <Route path="/products/suits" element={<Suits products1={products2}/>} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
        </Routes>
      </div>
      <Footer2 />
    </BrowserRouter>
  )
}

export default App
