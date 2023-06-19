import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MdOutlineStar } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slice/bazarSlice'

import saree1 from '../../assets/saree1.jpg'
import saree2 from '../../assets/saree2.jpg'
import slider1 from '../../assets/slider1.jpg'
import slider2 from '../../assets/slider2.jpg'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
    const [details, setDetails] = useState({})
    const imageArr = [details.image, saree1, saree2, slider1, slider2]
    const [counter, setCounter] = useState(1)
    const [currentImg, setCurrentImg] = useState(0)
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
            <div className='flex items-center max-w-screen-xl gap-10 mx-auto my-10'>
                <div className='flex flex-col gap-10'>
                    {/* <div className='cursor-pointer'>
                        <img className='w-[150px] h-[150px]' onClick={(img)=>setCurrentImg(img.src)} src={imageArr[1]} alt="Image 1" />
                    </div>
                    <div className='cursor-pointer'>
                        <img className='w-[150px] h-[150px]' src={imageArr[2]} alt="Image 2" />
                    </div>
                    <div className='cursor-pointer'>
                        <img className='w-[150px] h-[150px]' src={imageArr[3]} alt="Image 3" />
                    </div>
                    <div className='cursor-pointer'>
                        <img className='w-[150px] h-[150px]' src={imageArr[4]} alt="Image 4" />
                    </div> */}
                    {
                        imageArr.map((currElem, index) => {
                            return (
                                <div className='cursor-pointer' key={index}>
                                    <img className='w-[150px] h-[150px]' onClick={() => setCurrentImg(index)} src={imageArr[index]} alt="Image 1" />
                                </div>
                            )
                        })
                    }
                </div>
                <div className='relative w-2/5'>
                    <img src={imageArr[currentImg]} className='w-full h-[550px] object-cover' />
                    <div className='absolute right-0 top-4'>
                        {details.isNew &&
                            <>
                                <p className='px-6 py-1 font-semibold text-white bg-black font-titleFont'>
                                    For Sale
                                </p>
                            </>
                        }
                    </div>
                </div>
                <div className='w-3/5'>
                    <div className='flex flex-col justify-center gap-12'>
                        <h2 className='text-4xl font-semibold'>{details.title}</h2>
                        <div className='flex items-center gap-4 mt-3'>
                            <p className='text-gray-500 line-through font-base'>${details.oldPrice}</p>
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
                        <p className='mt-3 text-base text-gray-500'>{details.description}</p>
                        <div className='flex gap-4 mt-6'>
                            <div className='flex items-center justify-between gap-4 p-3 text-gray-500 border w-52'>
                                <p className='text-sm'>Quantity</p>

                                <div className='flex items-center gap-4 text-sm font-semibold'>

                                    <button className='flex items-center justify-center h-5 px-2 py-2 text-lg font-normal duration-300 border cursor-pointer hover:bg-gray-700 hover:text-white active-bg-black' onClick={handleMinus}>-</button>

                                    <span>{counter}</span>

                                    <button className='flex items-center justify-center h-5 px-2 py-2 text-lg font-normal duration-300 border cursor-pointer hover:bg-gray-700 hover:text-white active-bg-black' onClick={handlePlus}>+</button>
                                </div>
                            </div>
                            <button className='px-6 py-3 text-white bg-black active:bg-gray-800' onClick={() => dispatch(addToCart({
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