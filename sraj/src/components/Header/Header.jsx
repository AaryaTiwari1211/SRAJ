import React from 'react'
import styles from './Header.module.scss'
import { Link, NavLink } from 'react-router-dom'
import { FaShoppingCart, FaTimes } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
const Cart = () => {
    return (
        <span className={styles.cart}>
            <NavLink to='/cart' className={ActiveLink}>
                Cart
                <FaShoppingCart
                    size={20}
                />
                <p>0</p>
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
    const toggleMenu = () => {
        setMenu(!menu);
    }
    const hideMenu = () => {
        setMenu(false);
    }
    return (
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
                            <NavLink to='/login' className={ActiveLink}>
                                Login
                            </NavLink>
                            <NavLink to='/register' className={ActiveLink}>
                                Register
                            </NavLink>
                            <NavLink to='/myorders' className={ActiveLink}>
                                My Orders
                            </NavLink>
                        </span>

                        <Cart />
                    </div>
                </nav>
                <div className={styles["menu-icon"]}>
                    <Cart />
                    <GiHamburgerMenu size={30} onClick={toggleMenu} />
                </div>
            </div>
        </header >
    )
}

export default Header