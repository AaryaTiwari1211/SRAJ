import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Banner from '../../components/Banner/Banner';
import 'react-toastify/dist/ReactToastify.css';
import Products from '../../components/Products/Products';

function Home({products}) {
    return (
        <>
            <Banner />
            <Products products={products} />
        </>
    )
}

export default Home