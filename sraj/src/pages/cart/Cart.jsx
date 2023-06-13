import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import cartBanner from '../../assets/pinkbanner.jpg'
import CartItem from '../../components/CartItem/CartItem'
import StripeCheckout from 'react-stripe-checkout'
import { toast } from 'react-toastify'

function Cart() {
    const productData = useSelector((state) => state.bazar.productData)
    const userInfo = useSelector((state) => state.auth);
    console.log(userInfo)
    const [totalAmt, setTotalAmt] = useState("")
    const [payNow,setPayNow] = useState(false)

    const handleCheckout = () => {
        if(userInfo)
        {
            setPayNow(true)
        }
        else{
            toast.error("Please sign in for checkout")
        }
    }

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
            <div className='w-100 flex flex-col m-5 py-20 lg:flex-row lg:items-start items-center lg:justify-center'>
                <CartItem />
                <div className='max-w-[400px] bg-[#fafafa] py-6 px-4'>
                    <div className='flex flex-col justify-between gap-6 border-b-[1px] border-b-gray-400 pb-6'>
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
                    <button onClick={handleCheckout} className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-red-500 duration-500'>Proceed to Checkout</button>
                    {
                        payNow &&
                        <>
                            <div className='w-full mt-6 flex items-center justify-center'>
                                <StripeCheckout
                                    stripeKey='pk_test_51NIS0USCLREXlhDNrwIVhIL0wMTPPAw92LYYmsFry8rBBpxiNg0HYSlOu8CV7E9GeZb4zdBwQMO8xNpO1RvjJeuG00FcrD8VRH'
                                    name='SRAJ FASHION'
                                    amount={totalAmt * 100}
                                    label='Pay to SRAJ FASHION'
                                    description={`Your payment amount is $${totalAmt}`}
                                    email={userInfo.email}
                                />
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Cart