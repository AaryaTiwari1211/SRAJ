import React from 'react'
import { useState } from 'react'
import styles from '../Auth.module.scss'
import registerImg from '../../../assets/register.png'
import { Link } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
import Card from '../../../components/Card/Card'
function Register() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    // const [email,Password] = useState('')
    const registerUser = () => {
        e.preventDefault();
        console.log(email,password)
    }
    return (
        <section className={`container ${styles.auth}`}>
            <Card>
                <div className={`${styles.form}`}>
                    <h2>Register</h2>
                    <form onSubmit={registerUser}>
                        <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your Email" required />
                        <input type='password' value={password} placeholder="Enter your Password" onChange={(e)=>setPassword(e.target.value)} required />
                        <button className='--btn --btn-primary --btn-block'>Signup</button>
                    </form>
                    <p style={{
                        textAlign: 'center'
                    }}>-- or --</p>
                    <button className='--btn --btn-danger --btn-block'><FaGoogle style={{
                        margin: '0 5px',
                        alignItems: 'center'
                    }} color='#fff' />Sign Up with Google</button>
                    <div className={styles.register}>
                        <p>Already have an Account??</p>
                        <Link to='/login' style={{
                            margin: '0 10px'
                        }}>Login</Link>
                    </div>
                </div>
            </Card>
            <div className={styles.img}>
                <img src={registerImg} width='400px' alt="Login Image" />
            </div>

        </section >
    )
}

export default Register