import React from 'react'
import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const HomeExtras = ({title,subtitle}) => {
    const navigate = useNavigate()
    return (
        <>
            <Box height={50} />
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'

                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        textAlign: 'center'
                    }}
                >
                    <Typography
                        variant='h2'
                        color='var(--light-pink)'
                        sx={{
                            fontFamily: 'Roboto'
                        }}
                    >
                        {/* LATEST TRENDS */}
                        {title}
                    </Typography>
                </Box>
                <Box height={20} />
                <Box
                    sx={{
                        width: '100%',
                        textAlign: 'center',
                    }}
                >
                    <Typography
                        variant='h4'
                        sx={{
                            fontFamily: 'Roboto'
                        }}
                    >
                        {/* New launches every day, styles that promise to capture your heart */}
                        {subtitle}
                    </Typography>
                </Box>
            </Box>
            <Box height={50} />
        </>
    )
}

export default HomeExtras