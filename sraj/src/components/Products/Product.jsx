import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MdOutlineStar } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slice/bazarSlice'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
    const [counter, setCounter] = useState(1)
    const [details, setDetails] = useState({})
    const dispatch = useDispatch()
    const stock = 20
    const location = useLocation()
    useEffect(() => {
        console.log(location.state.item)
        setDetails(location.state.item)
    }, [])
    const handleMinus = () => {
        if (counter >= 2) {
            setCounter((prev) => prev - 1)
        }
    }
    const handlePlus = () => {
        if (counter < stock) {
            setCounter((prev) => prev + 1)
        }
    }
    return (
        <div>
            <div className='max-w-screen-xl mx-auto my-10 flex gap-10'>
                <div className='w-2/5 relative'>
                    <img src={details.image} className='w-full h-[550px] object-cover' />
                    <div className='absolute top-4 right-0'>
                        {details.isNew &&
                            <>
                                <p className='bg-black text-white font-semibold font-titleFont px-6 py-1'>
                                    For Sale
                                </p>
                            </>
                        }
                    </div>
                </div>
                <div className='w-3/5'>
                    <div className='flex flex-col justify-center gap-12'>
                        <h2 className='text-4xl font-semibold'>{details.title}</h2>
                        <div className='flex items-center mt-3 gap-4'>
                            <p className='line-through font-base text-gray-500'>${details.oldPrice}</p>
                            <p className='text-[20px] font-semibold text-gray-900'>${details.price}</p>
                        </div>
                        <div className='flex items-center gap-2 text-base'>
                            <div className='flex'>
                                <MdOutlineStar size={17} />
                                <MdOutlineStar size={17} />
                                <MdOutlineStar size={17} />
                                <MdOutlineStar size={17} />
                                <MdOutlineStar size={17} />
                            </div>
                            <p className='text-xs text-gray-500'>1 Customer Review</p>
                        </div>
                        <p className='text-base text-gray-500 mt-3'>{details.description}</p>
                        <div className='flex gap-4 mt-6'>
                            <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
                                <p className='text-sm'>Quantity</p>

                                <div className='flex items-center gap-4 text-sm font-semibold'>

                                    <button className='border h-5 font-normal text-lg flex items-center justify-center px-2 py-2 
                                        hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active-bg-black' onClick={handleMinus}>-</button>

                                    <span>{counter}</span>

                                    <button className='border h-5 font-normal text-lg flex items-center justify-center px-2 py-2 
                                        hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active-bg-black' onClick={handlePlus}>+</button>
                                </div>
                            </div>
                            <button className='bg-black text-white py-3 px-6 active:bg-gray-800' onClick={() => dispatch(addToCart({
                                _id: details._id,
                                title: details.title,
                                image: details.image,
                                price: details.price,
                                quantity: counter,
                                description: details.description,
                            })) & toast.success(`${details.title} added to cart`)}>Add to Cart</button>
                        </div>
                        <p className='text-base text-gray-500'>Category: <span className='font-medium capitalize'> {details.category} </span></p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Product