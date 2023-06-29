import React from 'react'
import { Box, Typography, TextField } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useMediaQuery } from '@mui/material';
import { IconButton } from '@mui/material';
import { deleteItem, incrementQuantity, resetCart, decrementQuantity } from '../../redux/slice/bazarSlice'
import { toast } from 'react-toastify'
const Cart2 = () => {
    const productData = useSelector((state) => state.bazar.productData);
    const userInfo = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [totalAmt, setTotalAmt] = useState('');
    const [payNow, setPayNow] = useState(false);
    const md = useMediaQuery("(min-width:1024px)")

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
        <>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    margin: '20px',
                }}
            >
                <Box>
                    <Typography
                        sx={{
                            fontSize: 24,
                            fontFamily: 'Poppins',
                            fontWeight: '600',
                            letterSpacing: '1px',
                        }}
                    >MY CART</Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '20px',
                        backgroundColor: '#f2f2f2',
                    }}
                >
                    <Box
                        sx={{
                            width: '50%',
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 16,
                                fontFamily: 'Poppins',
                                fontWeight: '600',
                                letterSpacing: '1px',
                            }}
                        >Products</Typography>
                    </Box>
                    <Box
                        sx={{
                            width: '50%',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 16,
                                fontFamily: 'Poppins',
                                fontWeight: '600',
                                letterSpacing: '1px',
                            }}
                        >Price</Typography>
                        <Typography
                            sx={{
                                fontSize: 16,
                                fontFamily: 'Poppins',
                                fontWeight: '600',
                                letterSpacing: '1px',
                            }}
                        >Quantity</Typography>
                        <Typography
                            sx={{
                                fontSize: 16,
                                fontFamily: 'Poppins',
                                fontWeight: '600',
                                letterSpacing: '1px',
                            }}
                        >Total Price</Typography>
                    </Box>
                </Box>
                <Box height={20} />
                <Box>
                    {
                        productData.map((item) => (
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%',
                                    padding: '20px',
                                    border: '1px solid #f2f2f2',
                                    marginBottom: '10px'
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: '50%',
                                        gap: '20px',
                                    }}
                                >
                                    <IconButton
                                        onClick={() => dispatch(deleteItem(item.id)) & toast.error(`${item.name} was deleted`)}
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                    <img src={item.image} width='100px' height='100px' alt='Cart image' />
                                    <Typography
                                        sx={{
                                            fontSize: 16,
                                            fontFamily: 'Poppins',
                                            fontWeight: '600',
                                            letterSpacing: '1px',
                                        }}
                                    >{item.name}</Typography>
                                </Box>
                                <Box
                                    sx={{
                                        width: '50%',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: 16,
                                            fontFamily: 'Poppins',
                                            fontWeight: '600',
                                            letterSpacing: '1px',
                                        }}
                                    ><CurrencyRupeeIcon sx={{
                                        fontSize: '18px'
                                    }} />{item.price}</Typography>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <IconButton
                                                onClick={() => dispatch(incrementQuantity({
                                                    id: item.id,
                                                    name: item.Name,
                                                    image: item.image,
                                                    price: item.New_Price,
                                                    quantity: item.quantity,
                                                    description: item.Desc,
                                                }))}
                                            >
                                                <ExpandLessIcon />
                                            </IconButton>
                                            <IconButton
                                                onClick={() => dispatch(decrementQuantity({
                                                    id: item.id,
                                                    name: item.Name,
                                                    image: item.image,
                                                    price: item.New_Price,
                                                    quantity: item.quantity,
                                                    description: item.Desc,
                                                }))}
                                            >
                                                <ExpandMoreIcon />
                                            </IconButton>
                                        </Box>
                                        <Typography
                                            sx={{
                                                fontSize: 16,
                                                fontFamily: 'Poppins',
                                                fontWeight: '600',
                                                letterSpacing: '1px',

                                            }}
                                        >{item.quantity}</Typography>
                                    </Box>
                                    <Box>
                                        <Typography
                                            sx={{
                                                fontSize: 16,
                                                fontFamily: 'Poppins',
                                                fontWeight: '600',
                                                letterSpacing: '1px',
                                            }}
                                        ><CurrencyRupeeIcon sx={{
                                            fontSize: '18px'
                                        }} />{item.price * item.quantity}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        ))
                    }
                </Box>
                <Box>
                    <Typography>Additional Comments</Typography>
                </Box>
            </Box>
        </>
    )
}

export default Cart2