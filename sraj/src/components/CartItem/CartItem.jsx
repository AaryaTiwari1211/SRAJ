import React, { useEffect, useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem, incrementQuantity, resetCart, decrementQuantity } from '../../redux/slice/bazarSlice'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft } from 'react-icons/hi'

const CartDisplay = ({ productData }) => {
    const dispatch = useDispatch();
    return productData.map((item) => (
        <>
            <div key={item._id} className='flex flex-col items-center justify-center gap-6 mt-6 lg:flex-row lg:justify-between'>
                <div className='flex items-center gap-2'>
                    <MdOutlineClose onClick={() => dispatch(deleteItem(item.id)) & toast.error(`${item.name} was deleted`)} className='text-xl text-gray-600 duration-300 cursor-pointer hover:text-red-600' />
                    <img
                        src={item.image}
                        className='min-w-[100px] h-[100px] object-fit'
                        alt="productImg"
                    />
                </div>
                <div className='flex flex-col items-center gap-6 text-center lg:flex-row'>
                    <h2 className='w-[300px] text-[15px]'>{item.name}</h2>
                    <p className='font-bold'>${item.price}</p>
                    <div className='flex items-center justify-between gap-4 p-3 m-3 text-gray-500 border '>
                        <p className='text-sm'>Quantity</p>
                        <div className='flex items-center gap-4 text-sm font-semibold'>
                            <button className='flex items-center justify-center h-5 px-2 py-2 text-lg font-normal duration-300 border cursor-pointer hover:bg-gray-700 hover:text-white active-bg-black' 
                            onClick={() => dispatch(decrementQuantity({
                                id: item.id,
                                name: item.Name,
                                image: item.Images[0],
                                price: item.New_Price,
                                quantity: item.quantity,
                                description: item.Desc,
                            }))}>-</button>

                            <span>{item.quantity}</span>

                            <button className='flex items-center justify-center h-5 px-2 py-2 text-lg font-normal duration-300 border cursor-pointer hover:bg-gray-700 hover:text-white active-bg-black' 
                            onClick={() => dispatch(incrementQuantity({
                                id: item.id,
                                name: item.Name,
                                image: item.Images[0],
                                price: item.New_Price,
                                quantity: item.quantity,
                                description: item.Desc,
                            }))}>+</button>
                        </div>
                    </div>
                    <p className='w-14'>${item.price * item.quantity}</p>
                </div>
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
                        <button onClick={() => dispatch(resetCart()) & toast.error("Your Cart is now empty")} className='px-6 py-1 m-8 text-white bg-red-500 hover:bg-red-800 '>Reset Cart</button>
                    </>
                )}
            </div>
            <Link to="/">
                <button className="flex items-center gap-1 m-8 text-gray-400 hover:text-black duration:300">
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