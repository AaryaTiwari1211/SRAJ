import React from 'react';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { useSelector, useDispatch } from 'react-redux';
import cartBanner from '../../assets/pinkbanner.jpg';
import CartItem from '../../components/CartItem/CartItem';
import StripeCheckout from 'react-stripe-checkout';
import { toast } from 'react-toastify';
import axios from 'axios';
import Cart2 from '../../components/Cart2/Cart2';
import NewsLetter from '../../components/NewsLetter/NewsLetter';

function Cart() {
    const productData = useSelector((state) => state.bazar.productData);
    const userInfo = useSelector((state) => state.auth);
    const [totalAmt, setTotalAmt] = useState('');
    const [payNow, setPayNow] = useState(false);
    const [isMetamaskInstalled, setIsMetamaskInstalled] = useState(false);
    const [userAddress, setUserAddress] = useState('');


    const handleCheckout = async () => {
        try {
            if (!userAddress) {
                toast.error('Please enter your wallet address to proceed with the payment');
                return;
            }

            if (!isMetamaskInstalled) {
                toast.error('You do not have Metamask installed on your browser to proceed with the payment');
                return;
            }

            // Request account access if needed
            await window.ethereum.request({ method: 'eth_requestAccounts' });

            // Initialize provider and signer
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            // Validate the provided user address
            ethers.utils.getAddress(userAddress);

            // Ensure totalAmt is defined and is a valid number
            if (!totalAmt || isNaN(totalAmt)) {
                toast.error('Invalid amount. Please check and try again.');
                return;
            }

            // Send transaction
            const tx = await signer.sendTransaction({
                to: '0x38E4eFC439Ef728716511817F0a508F53252c2b9',
                value: ethers.utils.parseEther(totalAmt.toString())
            });

            // Notify user of the successful transaction initiation
            toast.success('Transaction sent! Please wait for confirmation.');

            // Optional: Handle the transaction receipt or confirmation if needed
            await tx.wait(); // Waits for transaction confirmation
            toast.success('Transaction confirmed!');
        } catch (error) {
            console.error(error);
            toast.error(`Transaction failed: ${error.message || "An error occurred"}`);
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

    useEffect(() => {
        if (window.ethereum) {
            setIsMetamaskInstalled(true);
        }
    }, [])

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
                    <input type='text' value={userAddress} onChange={(e) => {
                        setUserAddress(e.target.value);
                    }} placeholder='Enter your wallet address' className='w-full h-12 mt-6 px-4 border-[1px] border-gray-400' />
                    <button
                        onClick={handleCheckout}
                        className='w-full py-3 mt-6 text-base text-white duration-500 bg-black hover:bg-red-500'
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div>
            <NewsLetter />
        </div>
    );
}

export default Cart;
