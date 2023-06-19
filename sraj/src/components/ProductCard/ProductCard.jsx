import React, { useEffect, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slice/bazarSlice'
import saree1 from '../../assets/saree1.jpg'
import saree2 from '../../assets/saree2.jpg'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductCard({ product }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const _id = product.title
    // const idString = (_id) => {
    //     return String(_id).toLowerCase().split(" ").join("");
    // }
    // const rootId = idString(_id)
    
    const handleDetails = () => {
        navigate(`/product/${product.id}`, {
            state: {
                item: product
            }
        })
    }
    return (
        <div className="relative group">
            <div onClick={handleDetails} className="w-full h-[500px] overflow-hidden cursor-pointer">
                <img
                    src={product.Images[0]}
                    alt="Image"
                    className="object-cover w-full h-full duration-500 group-hover:scale-110"
                />
            </div>
            <div className='w-full border-[1px] px-2 py-4'>
                <div className='flex justify-between align-center'>
                    <div>
                        <h2 className='text-2xl font-bold font-titleFont'>
                            {product.Name}
                        </h2>
                    </div>
                    <div className='relative flex gap-2 overflow-hidden w-28'>
                        <div className='relative flex justify-end gap-2 px-2 mx-2 transition-transform duration-500 transform group-hover:translate-x-32 -text-sm w-28'>
                            <p className="line-through text-[12px] text-gray-500">${product.Old_Price}</p>
                            <p className='font-semibold text-[12px]'>${product.New_Price}</p>
                        </div>
                        <p className='absolute text-[11px] z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center 
                        gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform 
                        cursor-pointer duration-500' onClick={() => dispatch(addToCart({
                            id: product.id,
                            name: product.Name,
                            image: product.Image[0],
                            price: product.New_Price,
                            quantity: 1,
                            description: product.Desc,
                        })) & toast.success(`${product.Name} added`)}>add to cart{" "}<span><BsArrowRight size={7} /></span></p>
                    </div>
                </div>
                <div>
                    <p>{product.Category}</p>
                </div>
                <div className='absolute right-0 top-4'>
                    {product.isNew &&
                        <>
                            <p className='px-6 py-1 font-semibold text-white bg-[#dc747d] font-titleFont'>
                                For Sale
                            </p>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductCard
