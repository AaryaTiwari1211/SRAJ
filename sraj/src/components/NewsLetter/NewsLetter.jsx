import React from 'react'
import { Box, Typography, TextField } from '@mui/material'
import CustomButton from '../CustomButton/CustomButton'
import { useMediaQuery } from '@mui/material'
import InputField from '../InputField/InputField'

const NewsLetter = () => {
    const md = useMediaQuery("(min-width:800px)")
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: md ? 'row' : 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 20px',
                backgroundColor: '#f2f2f2',
                width: '100%',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    justifyContent: 'flex-start',
                    width: '40%'
                }}
            >
                <Typography
                    sx={{
                        fontSize: 16,
                        fontFamily: 'Poppins',
                        fontWeight: '600',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                    }}
                >NEWSLETTER SUBSCRIPTION</Typography>
                <Typography
                    sx={{
                        fontSize: 13,
                        fontFamily: 'Poppins',
                        fontWeight: '600',
                    }}
                >Sign up for weekly newsletters to receive information about the new arrivals, future events and specials discounts.</Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    gap: '10px',
                    justifyContent: 'center',
                    width: '40%'
                }}
            >
                <TextField
                    variant='outlined'
                    placeholder='Enter your Email'
                    label='Email'
                    sx={{
                        width: '150px',
                    }}
                />
                <CustomButton text="Sign Up" click='' />
            </Box>
        </Box>
    )
}

export default NewsLetter