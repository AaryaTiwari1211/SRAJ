import React from 'react'
import { Link } from 'react-router-dom'

const NavbarItem = ({ link , text }) => {
    return <Link to={link}>
        <div className='p-5 m-2 text-center text-black uppercase duration-300 font-Poppins hover:text-red-200'>
            {text}
        </div>
    </Link>
}

const Navbar2 = () => {
    return (
        <div className='flex text-black font-semibold border-gray-500 justify-evenly border-b-[1px] border-t-[1px]'>
            <NavbarItem link='/products/sarees' text="sarees"/>
            <NavbarItem link='/products/lehengas' text="lehengas"/>
            <NavbarItem link='/products/bedsheets' text="bedsheets"/>
            <NavbarItem link='/products/jewellery' text="jewellery"/>
            <NavbarItem link='/products/suits' text="suits"/>
            <NavbarItem link='/products/kurtas' text="kurtas"/>
            <NavbarItem link='/products/nightwear' text="nightwear"/>
        </div>
    )
}

export default Navbar2