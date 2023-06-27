import React, { useEffect, useState } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slice/bazarSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const SizeButton = ({ text }) => {
    return (
        <Button
            variant="outlined"
            sx={{
                borderRadius: '75%',
                width: '50px',
                height: '50px',
                border: '1px solid black',
                color: 'black',
                fontSize: 13,

                '&:hover': {
                    transitionDuration: '300ms',
                    backgroundColor: 'var(--light-pink)',
                    color: 'white !important',
                    border: 'none'
                }
            }}
        >
            {text}
        </Button>
    )
}

const SizeOptions = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                gap: '5px',
            }}
        >
            <SizeButton text="XS" />
            <SizeButton text="S" />
            <SizeButton text="M" />
            <SizeButton text="L" />
            <SizeButton text="XL" />
        </Box>
    )
}

const Product2 = ({ item }) => {
    const [details, setDetails] = useState({})
    const [counter, setCounter] = useState(1)
    const [currentImg, setCurrentImg] = useState(0)
    const dispatch = useDispatch()
    const stock = 20
    const location = useLocation()
    useEffect(() => {
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
        <>
            <Box height={30} />
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    gap: '20px',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '15px'
                    }}
                >
                    {
                        details &&
                        details.Images &&
                        details.Images.map((image, index) => {
                            return (
                                <div className='cursor-pointer' key={index}>
                                    <img
                                        className='w-full h-[100px] object-fit'
                                        onClick={() => setCurrentImg(index)}
                                        src={image}
                                        alt={details.Name}
                                    />
                                </div>
                            );
                        })
                    }
                </Box>
                <Box>
                    <img src={details && details.Images && details.Images[currentImg]} className='w-full h-[550px] object-fit' />
                    <Box sx={{
                        position: 'absolute',
                        right: '0',
                        top: '4',
                    }}>
                        {details && (details.isNew &&
                            <>
                                {/* <p className='px-6 py-1 font-semibold text-white bg-black font-titleFont'>
                                    For Sale
                                </p> */}
                                <Typography
                                    sx={{
                                        padding: '30px 5px',
                                        font: 'semi-bold',
                                        color: 'white',
                                        backgroundColor: 'black',
                                        fontFamily: 'Poppins'
                                    }}
                                >
                                    For Sale
                                </Typography>
                            </>
                        )}
                    </Box>
                </Box>
                <Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            gap: '30px',
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: 'Poppins',
                                fontSize: '20px',
                                textTransform: 'uppercase',
                                fontWeight: 600,
                                letterSpacing: '1px',
                            }}
                        >{details.Name}</Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    textDecoration: 'line-through',
                                    color: 'gray'
                                }}
                            >
                                <CurrencyRupeeIcon fontSize='16px' />
                                {details.Old_Price}
                            </Typography>
                            <Typography sx={{
                                fontSize: '16px',
                                fontWeight: '600'
                            }}
                            >
                                <CurrencyRupeeIcon fontSize='16px' />{details.New_Price}
                            </Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                        }}>
                            <Box sx={{ display: 'flex', gap: '5px' }}>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </Box>
                            <Typography>1 Customer Review</Typography>
                        </Box>
                        <Typography
                            sx={{
                                color: 'var(--light-pink)',
                                fontWeight: '600',
                                fontSize: '15px',
                                fontFamily: 'Poppins'
                            }}
                        >
                            inclusive of all taxes..
                        </Typography>
                        <SizeOptions />
                        <Box>
                            <div className='flex items-center justify-between gap-4 p-3 text-gray-500 border w-52'>
                                <p className='text-sm'>Quantity</p>

                                <div className='flex items-center gap-4 text-sm font-semibold'>

                                    <button className='flex items-center justify-center h-5 px-2 py-2 text-lg font-normal duration-300 border cursor-pointer hover:bg-gray-700 hover:text-white active-bg-black' onClick={handleMinus}>-</button>

                                    <span>{counter}</span>

                                    <button className='flex items-center justify-center h-5 px-2 py-2 text-lg font-normal duration-300 border cursor-pointer hover:bg-gray-700 hover:text-white active-bg-black' onClick={handlePlus}>+</button>
                                </div>
                            </div>
                        </Box>

                        <button className='px-6 py-3 text-white bg-black active:bg-gray-800' onClick={() => dispatch(addToCart({
                            id: details.id,
                            title: details.Name,
                            image: details.Images[0],
                            price: details.New_Price,
                            quantity: counter,
                            description: details.Desc,
                        })) & toast.success(`${details.Name} added to cart`)}>
                            Add to Cart
                        </button>
                        <p className='text-base text-gray-500'>Category: <span className='font-medium capitalize'> {details.Category} </span></p>
                    </Box>
                </Box>
            </Box>
            <Box height={30} />
        </>
    )
}

export default Product2