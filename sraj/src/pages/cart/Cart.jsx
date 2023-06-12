import React from 'react'
import { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import cartBanner from '../../assets/pinkbanner.jpg'
import CartItem from '../../components/CartItem/CartItem'

function Cart() {
    const productData = useSelector((state) => state.bazar.productData)
    const dispatch = useDispatch()
    const [totalAmt, setTotalAmt] = useState("")

    useEffect(() => {
        let price = 0;
        productData.map((item) => {
            price += item.price * item.quantity
            return price
        })
        setTotalAmt(price)
    }, [productData])

    return (
        <div>
            <img
                src={cartBanner}
                className='w-full h-60 object-cover'
                alt="cartBanner"
            />
            <div className='max-w-screen-xl mx-auto py-20 flex'>
                <CartItem />
                <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
                    <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
                        <h2 className='text-2xl text-[15px]'>Cart Totals</h2>
                        <p className='flex items-center gap-10 text-[15px]'>
                            Subtotal {" "}
                            <span className='font-titleFont font-bold text-[15px]'>
                                ${totalAmt}
                            </span>
                        </p>
                        <p className='flex items-center gap-9 text-[15px]'>
                            Shipping Address:  {" "}
                            <span className='font-titleFont font-bold text-[15px]'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Deserunt temporibus deleniti molestias,
                            </span>
                        </p>
                    </div>
                    <p className='font-titleFont font-semibold flex justify-between text-[15px] mt-6'>
                        Total <span className='text-[15px] font-bold'>${totalAmt}</span>
                    </p>
                    <button className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-red-500 duration-500'>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart