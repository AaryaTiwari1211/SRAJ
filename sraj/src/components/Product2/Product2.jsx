import React, { useEffect, useState } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slice/bazarSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import COD from '../../assets/cash-on-delivery.svg'

import CustomButton from '../CustomButton/CustomButton'

import ProductFeatures from '../ProductFeatures/ProductFeatures'

import StarIcon from '@mui/icons-material/Star';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const SizeButton = ({ text, disabled }) => {
    return (
        <Button
            disabled={disabled}
            variant="outlined"
            sx={{
                borderRadius: '50%',
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
            <SizeButton disabled={false} text="XS" />
            <SizeButton disabled={false} text="S" />
            <SizeButton disabled={false} text="M" />
            <SizeButton disabled={false} text="L" />
            <SizeButton disabled={false} text="XL" />
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

    const md = useMediaQuery('(min-width:1024px)')
    return (
        <>
            <Box height={30} />
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: md ? 'row' : 'column',
                    alignItems: md ? 'flex-start' : 'center',
                    gap: '20px',
                    justifyContent: md ? '' : 'center'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: md ? 'row' : 'column-reverse',
                        alignItems: md ? 'flex-start' : 'center',
                        gap: '20px'
                    }}
                >
                    <Box width={30} />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: md ? 'column' : 'row',
                            alignItems: 'center',
                            gap: '15px'
                        }}
                    >
                        {
                            details &&
                            details.Images &&
                            details.Images.map((image, index) => {
                                return (
                                    <Box
                                        sx={{
                                            cursor: 'pointer',
                                        }}
                                        key={index}
                                    >
                                        <img
                                            className='w-[150px] h-[150px]'
                                            onClick={() => setCurrentImg(index)}
                                            src={image}
                                            alt={details.Name}
                                        />
                                    </Box>
                                );
                            })
                        }
                    </Box>
                    <Box
                        sx={{
                            position: 'relative',
                            height: '100%',
                        }}
                    >
                        <img src={details && details.Images && details.Images[currentImg]}
                            className={`${md ? 'max-w-[600px]' : 'w-[100%]'} ${md ? 'h-[100vh]' : 'h-[70vh]'}`}
                        />
                        <Box sx={{
                            position: 'absolute',
                            right: '4',
                            top: '0',
                        }}>
                            {details && (details.isNew &&
                                <>
                                    <Typography
                                        sx={{
                                            padding: '5px 20px',
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
                </Box>
                <Box width={30} />
                <Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: md ? 'flex-start' : 'center',
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
                                    fontSize: '20px',
                                    fontWeight: '600',
                                    textDecoration: 'line-through',
                                    color: 'gray',
                                    fontFamily: 'Poppins'
                                }}
                            >
                                <CurrencyRupeeIcon fontSize='16px' />
                                {details.Old_Price}
                            </Typography>
                            <Typography sx={{
                                fontSize: '24px',
                                fontWeight: '600',
                                fontFamily: 'Poppins'
                            }}
                            >
                                <CurrencyRupeeIcon fontSize='16px' />{details.New_Price}
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'var(--light-pink)',
                                    fontWeight: '600',
                                    fontSize: '12px',
                                    fontFamily: 'Poppins'
                                }}
                            >
                                inclusive of all taxes
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
                        <SizeOptions />
                        <Box>
                            <Box
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    gap: '5px',
                                    padding: '10px',
                                    color: 'gray',
                                    borderWidth: '1px',
                                    borderColor: 'black',
                                    borderStyle: 'solid',
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: 15,
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Quantity
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '20px',
                                    }}
                                >
                                    <Button
                                        variant='text'
                                        onClick={handleMinus}
                                        sx={{
                                            color: 'var(--light-pink)',
                                            '&:hover': {
                                                backgroundColor: 'var(--light-pink)',
                                                color: 'white'
                                            }
                                        }}
                                    >
                                        <RemoveIcon />
                                    </Button>
                                    <Typography
                                        sx={{
                                            fontSize: 15
                                        }}
                                    >{counter}</Typography>
                                    <Button
                                        variant='text'
                                        onClick={handlePlus}
                                        sx={{
                                            color: 'var(--light-pink)',
                                            '&:hover': {
                                                backgroundColor: 'var(--light-pink)',
                                                color: 'white'
                                            }
                                        }}
                                    >
                                        <AddIcon />
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                        <CustomButton
                            text='ADD TO CART'
                            width='100px'
                            click={() => dispatch(addToCart({
                                id: details.id,
                                title: details.Name,
                                image: details.Images[0],
                                price: details.New_Price,
                                quantity: counter,
                                description: details.Desc,
                            })) & toast.success(`${details.Name} added to cart`)}
                        />
                        <Typography
                            sx={{
                                fontSize: '15px',
                                textTransform: 'uppercase'
                            }}
                        >
                            Category : <span style={{
                                color: 'var(--light-pink)'
                            }}>{details.Category}</span>
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex'
                            }}
                        >
                            <Box>

                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <ProductFeatures />
                    </Box>
                </Box>
            </Box>
            <Box height={30} />
        </>
    )
}

export default Product2