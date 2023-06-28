import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

const NavbarItem = ({ link, text }) => {
    return <Link to={link}>
        <Typography
            sx={{
                fontFamily: 'Poppins',
                position: 'relative',
                fontWeight: '600',
                fontSize: '16px',
                padding: '10px',
                textTransform: 'uppercase',
                transition: 'all 0.3s',
                '&:hover': {
                    color: 'var(--light-pink)',
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    bottom: 5,
                    width: '100%',
                    height: '2px',
                    backgroundColor: 'var(--light-pink)', /* Change the color as per your design */
                    transform: 'scaleX(0)',/* Initially, hide the underline by scaling it down */
                    transition: 'transform 0.3s ease-in-out',
                },
                '&:hover::after': {
                    transform: 'scaleX(1)',
                }

            }}
        >
            {text}
        </Typography>
    </Link >
}

const Navbar2 = () => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '80px',
                    borderTop:'1px solid gray',
                    borderBottom:'1px solid gray',
                }}
            >
                <NavbarItem text="sarees" link='/products/sarees' />
                <NavbarItem text="lehengas" link='/products/lehengas' />
                <NavbarItem text="nightwear" link='/products/nightwear' />
                <NavbarItem text="bedsheets" link='/products/bedsheets' />
                <NavbarItem text="kurtas" link='/products/kurtas' />
                <NavbarItem text="suits" link='/products/suits' />
                <NavbarItem text="jewellery" link='/products/jewellery' />
            </Box>
        </>
    )
}

export default Navbar2