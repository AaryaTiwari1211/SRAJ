import React from 'react'
import { useState } from 'react'
import styles from '../Auth.module.scss'
import registerImg from '../../../assets/register.png'
import { Link } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
import Card from '../../../components/Card/Card'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase/firebase'
import { useNavigate } from 'react-router-dom'
import Loader from '../../../components/Loader/Loader'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const registerUser = (e) => {
        e.preventDefault();
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setLoading(false)
                toast.success("Registration Successful")
                navigate('/login')
            }).catch((error) => {
                toast.error("User already exists! Try with a different user")
                setLoading(false)
                console.log(errorCode, errorMessage)
            })
    }
    return (
        <>
            {loading && <Loader /> }
            <section className={`container ${styles.auth}`}>
                <Card>
                    <div className={`${styles.form}`}>
                        <h2>Register</h2>
                        <form onSubmit={registerUser}>
                            <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email" required />
                            <input type='password' value={password} placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)} required />
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
        </>
    )
}

export default Register