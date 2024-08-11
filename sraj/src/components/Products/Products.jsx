import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

function Products({ products }) {
    return (
        <div className='py-10'>
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