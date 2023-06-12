import React, { useEffect, useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem, incrementQuantity, resetCart , decrementQuantity } from '../../redux/slice/bazarSlice'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft } from 'react-icons/hi'

const CartDisplay = ({ productData }) => {
    const dispatch = useDispatch();
    return productData.map((item) => (
        <>
            <div key={item._id} className='flex items-center justify-between gap-6 mt-6'>
                <div className='flex items-center gap-2'>
                    <MdOutlineClose onClick={() => dispatch(deleteItem(item._id)) & toast.error(`${item.title} was deleted`)} className='text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300' />
                    <img
                        src={item.image}
                        className='w-32 h-32 object-cover'
                        alt="productImg"
                    />
                </div>
                <h2 className='w-[300px] text-[15px]'>{item.title}</h2>
                <p className='w-10 font-bold'>${item.price}</p>
                <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
                    <p className='text-sm'>Quantity</p>

                    <div className='flex items-center gap-4 text-sm font-semibold'>

                        <button className='border h-5 font-normal text-lg flex items-center justify-center px-2 py-2 
                            hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active-bg-black' onClick={() => dispatch(decrementQuantity({
                            _id: item._id,
                            title: item.title,
                            image: item.image,
                            price: item.price,
                            quantity: item.quantity,
                            description: item.description,
                        }))}>-</button>

                        <span>{item.quantity}</span>

                        <button className='border h-5 font-normal text-lg flex items-center justify-center px-2 py-2 
                            hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active-bg-black' onClick={() => dispatch(incrementQuantity({
                            _id: item._id,
                            title: item.title,
                            image: item.image,
                            price: item.price,
                            quantity: item.quantity,
                            description: item.description,
                        }))}>+</button>
                    </div>
                </div>
                <p className='w-14'>${item.price * item.quantity}</p>
            </div>
        </>
    ))
}

const CartItem = () => {
    const productData = useSelector((state) => state.bazar.productData);
    const dispatch = useDispatch();
    const stock = 20;

    return (
        <div className="w-2/3 pr-10">
            <div className="w-full">
                {productData.length === 0 ? (
                    <h2>Your Cart is Empty!!</h2>
                ) : (
                    <>
                        <CartDisplay productData={productData} />
                        <button onClick={() => dispatch(resetCart()) & toast.error("Your Cart is now empty")} className='bg-red-500 text-white m-8 py-1 px-6 hover:bg-red-800 '>Reset Cart</button>
                    </>
                )}
            </div>
            <Link to="/">
                <button className="m-8 flex items-center gap-1 text-gray-400 hover:text-black duration:300">
                    <span>
                        <HiOutlineArrowLeft />
                    </span>
                    Go Shopping
                </button>
            </Link>
        </div>
    );
};

export default CartItem