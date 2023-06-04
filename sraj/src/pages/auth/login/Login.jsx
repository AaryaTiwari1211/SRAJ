import React from 'react'
import styles from '../Auth.module.scss'
import loginImg from '../../../assets/login.png'
import { Link } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'

function Login() {
    return (
        <section className={`container ${styles.auth}`}>
            <div className={styles.img}>
                <img src={loginImg} width='400px' alt="Login Image" />
            </div>
            <div className={styles.form}>
                <h2>Login</h2>
                <form>
                    <input type='text' placeholder="Enter your Email" required />
                    <input type='password' placeholder="Enter your Password" required />
                    <button className='--btn --btn-primary --btn-block'>Login</button>
                </form>
                <div className={styles.links}>
                    <Link to='/resetpassword'>Reset Password</Link>
                </div>
                <p style={{
                    textAlign:'center'
                }}>-- or --</p>
                <button className='--btn --btn-danger --btn-block'><FaGoogle style={{
                    margin:'0 5px',
                    alignItems:'center'
                }} color='#fff'/>Sign in with Google</button>
                <div className={styles.register}>
                    <p>Dont have an Account??</p>
                    <Link to='/register' style={{
                        margin:'0 10px'
                    }}>Register</Link>
                </div>
            </div>
        </section>
    )
}

export default Login