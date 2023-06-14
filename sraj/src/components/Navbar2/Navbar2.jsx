import React from 'react'
import { Link } from 'react-router-dom'

const NavbarItem = ({ link , text }) => {
    return <Link to={link}>
        <div className='text-center text-black uppercase font-Poppins'>
            {text}
        </div>
    </Link>
}

const Navbar2 = () => {
    return (
        <div className='flex justify-center text-black border-[1px]'>
            <NavbarItem link='/sarees' text="sarees"/>
        </div>
    )
}

export default Navbar2