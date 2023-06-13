import React, { useEffect } from 'react'
import styles from './Header.module.scss'
import { Link, NavLink } from 'react-router-dom'
import { FaShoppingCart, FaTimes, FaUserCircle } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import { auth } from '../../firebase/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { useDispatch, useSelector } from 'react-redux'
import { ShowOnLogin, ShowOnLogout } from '../LinkHide/LinkHide'

import { useMediaQuery } from '@mui/material'


import { bazarSlice } from '../../redux/slice/bazarSlice'
import { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } from '../../redux/slice/authSlice'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const media = useMediaQuery('(max-width:860px)')
    return (
        <span className={styles.cart}>
            <NavLink to='/cart' className={ActiveLink}>
                {!media &&
                    (
                        <>
                            Cart
                        </>
                    )
                }
                <FaShoppingCart
                    size={20}
                />
            </NavLink>
        </span>
    )
}

const ActiveLink = ({ isActive }) => (isActive ? `${styles.active}` : "")

const Logo = () => {
    return (
        <div className={styles.logo}>
            <Link to='/'>
                <h2>
                    Sraj<span>.co</span>
                </h2>
            </Link>
        </div>
    )
}

function Header() {
    const [menu, setMenu] = useState(false)
    const [username, setUsername] = useState('')
    const navigate = useNavigate()
    const productData = useSelector((state) => state.bazar.productData)
    const dispatch = useDispatch()
    const toggleMenu = () => {
        setMenu(!menu);
    }
    const hideMenu = () => {
        setMenu(false);
    }
    const logoutUser = (e) => {
        signOut(auth).then(() => {
            console.log("Logged out successfully")
            dispatch(REMOVE_ACTIVE_USER())
            toast.success("Logged out successfully")
            navigate('/login')
        }).catch((error) => {
            toast.error("An error occured!!")
        });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                if (user.displayName === null) {
                    const mail = user.email.substring(0, user.email.indexOf("@"))
                    const userName = mail.charAt(0).toUpperCase() + mail.slice(1)
                    setUsername(userName)
                }
                else {
                    setUsername(user.displayName)
                }
                dispatch(SET_ACTIVE_USER({
                    email: user.email,
                    username: user.displayName ? user.displayName : username,
                    userID: user.uid,
                }))
            } else {
                setUsername('')
            }
        });
    }, [dispatch, username])

    return (
        <>
            <header>
                <div className={styles.header}>
                    <Logo />
                    <nav className={menu ? `${styles['show-nav']}` : `${styles['hide-nav']}`}>
                        <div
                            className={menu ? `${styles["nav-wrapper"]}${styles["show-nav-wrapper"]}` : `${styles["nav-wrapper"]}`}
                            onClick={hideMenu}>
                        </div>

                        <ul onClick={hideMenu}>
                            <li className={styles['logo-mobile']}>
                                <Logo />
                                {menu ? <FaTimes size={25} onClick={hideMenu} /> : <></>}
                            </li>
                        </ul>
                        <div className={styles["header-right"]} onClick={hideMenu}>
                            <span className={styles.links}>
                                <NavLink to='/' className={ActiveLink}>
                                    Home
                                </NavLink>
                                <NavLink to='/contactus' className={ActiveLink}>
                                    Contact Us
                                </NavLink>
                                <ShowOnLogout>
                                    <NavLink to='/login' className={ActiveLink}>
                                        Login
                                    </NavLink>
                                    <NavLink to='/register' className={ActiveLink}>
                                        Register
                                    </NavLink>
                                </ShowOnLogout>
                                <ShowOnLogin>
                                    <NavLink to='/myorders' className={ActiveLink}>
                                        My Orders
                                    </NavLink>
                                    <NavLink to='#'>
                                        Hi, {username}
                                    </NavLink>
                                    <NavLink to='/login' className={ActiveLink} onClick={logoutUser}>
                                        Logout
                                    </NavLink>
                                </ShowOnLogin>
                            </span>
                            <ShowOnLogin>
                                <Cart />
                            </ShowOnLogin>

                        </div>
                    </nav>
                    <div className={styles["menu-icon"]}>
                        <Cart />
                        <GiHamburgerMenu size={30} onClick={toggleMenu} />
                    </div>
                </div>
            </header >
        </>
    )
}

export default Header