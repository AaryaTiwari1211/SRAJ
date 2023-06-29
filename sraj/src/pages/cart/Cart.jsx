import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cartBanner from '../../assets/pinkbanner.jpg';
import CartItem from '../../components/CartItem/CartItem';
import StripeCheckout from 'react-stripe-checkout';
import { toast } from 'react-toastify';
import axios from 'axios';
import Cart2 from '../../components/Cart2/Cart2';

function Cart() {
    const productData = useSelector((state) => state.bazar.productData);
    const userInfo = useSelector((state) => state.auth);
    const [totalAmt, setTotalAmt] = useState('');
    const [payNow, setPayNow] = useState(false);

    const handleCheckout = () => {
        if (userInfo) {
            setPayNow(true);
        } else {
            toast.error('Please sign in for checkout');
        }
    };

    const payment = async (token) => {
        const amountInCents = Math.round(totalAmt * 100);
        await axios.post('http://localhost:8000/pay', {
            amount: amountInCents,
            token: token
        });
    };

    useEffect(() => {
        let price = 0;
        productData.forEach((item) => {
            price += item.price * item.quantity;
        });
        setTotalAmt(price);
    }, [productData]);

    const updateTotalAmt = (newTotal) => {
        setTotalAmt(newTotal);
    };

    return (
        <div>
            <div className='flex flex-col items-center py-20 m-5 w-100 lg:flex-row lg:items-start lg:justify-between'>
                {/* <CartItem productData={productData} updateTotalAmt={updateTotalAmt} /> */}
                <CartItem />
                <div className='max-w-[400px] bg-[#fafafa] py-6 px-4'>
                    <div className='flex flex-col justify-between gap-6 border-b-[1px] border-b-gray-400 pb-6'>
                        <h2 className='text-2xl text-[15px]'>Cart Totals</h2>
                        <p className='flex items-center gap-10 text-[15px]'>
                            Subtotal{' '}
                            <span className='font-titleFont font-bold text-[15px]'>${totalAmt}</span>
                        </p>
                        <p className='flex items-center gap-9 text-[15px]'>
                            Shipping Address:{' '}
                            <span className='font-titleFont font-bold text-[15px]'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt temporibus
                                deleniti molestias,
                            </span>
                        </p>
                    </div>
                    <p className='font-titleFont font-semibold flex justify-between text-[15px] mt-6'>
                        Total <span className='text-[15px] font-bold'>${totalAmt}</span>
                    </p>
                    <button
                        onClick={handleCheckout}
                        className='w-full py-3 mt-6 text-base text-white duration-500 bg-black hover:bg-red-500'
                    >
                        Proceed to Checkout
                    </button>
                    {payNow && (
                        <>
                            <div className='flex items-center justify-center w-full mt-6'>
                                <StripeCheckout
                                    stripeKey='pk_test_51NIS0USCLREXlhDNrwIVhIL0wMTPPAw92LYYmsFry8rBBpxiNg0HYSlOu8CV7E9GeZb4zdBwQMO8xNpO1RvjJeuG00FcrD8VRH'
                                    name='SRAJ FASHION'
                                    amount={totalAmt * 100}
                                    label='Pay to SRAJ FASHION'
                                    description={`Your payment amount is $${totalAmt}`}
                                    email={userInfo.email}
                                    token={payment}
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Cart;
