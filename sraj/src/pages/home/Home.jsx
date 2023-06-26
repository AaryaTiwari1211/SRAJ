import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
// import Banner from '../../components/Banner/Banner';
import CarouselComp from '../../components/Carousel/Carousel';
import 'react-toastify/dist/ReactToastify.css';
import Products from '../../components/Products/Products';
import HomeExtras from '../../components/Extra/HomeExtras';

function Home({ products }) {
    return (
        <>
            <CarouselComp />
            <HomeExtras title='LATEST TRENDS' subtitle='New launches every day, styles that promise to capture your heart' />
            <Products products={products} />
        </>
    )
}

export default Home