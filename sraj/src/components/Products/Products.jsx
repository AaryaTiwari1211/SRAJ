import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

function Products({ products }) {
    console.log(products)
    return (
        <div className='py-10'>
            <div className='flex flex-col items-center gap-4'>
                <h1 className='p-5 text-2xl text-center text-white bg-red-700 w-100'>
                    A journey into the heart of Indian traditions.
                </h1>
                <span className='w-20 h-[3px] bg-black'></span>
                <p className='max-w-[700px] text-gray-600 text-center'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae beatae harum cupiditate unde
                    libero veritatis facilis, deleniti ea maiores. Ipsam tenetur quod repellat vel
                    sequi animi fugit minus officia repudiandae.
                </p>
            </div>
            <div className='grid xs-grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 m-5 py-auto'>
                {
                    products.map((item)=>(
                        <ProductCard key={item.id} product = {item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Products