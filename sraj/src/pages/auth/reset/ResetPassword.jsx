import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../Auth.module.scss'
import resetImg from '../../../assets/reset.png'
import { Link } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
import Card from '../../../components/Card/Card'
import Loader from '../../../components/Loader/Loader'

import { auth } from '../../../firebase/firebase'
import { sendPasswordResetEmail } from "firebase/auth";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ResetPassword() {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const passwordReset = (e) => {
        e.preventDefault();
        setLoading(true)
        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log("Mail sent")
                toast.success("Email sent. Please check your inbox!!")
                navigate('/login')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorMessage)
            });
    }
    return (
        <>
            {loading && <Loader />}
            <section className={`container ${styles.auth}`}>
                <div className={styles.img}>
                    <img src={resetImg} width='400px' alt="Login Image" />
                </div>
                <Card>
                    <div className={`${styles.form}`}>
                        <h2>Reset Password</h2>
                        <form>
                            <input type='text' value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter your Email" required />
                            <button className='--btn --btn-primary --btn-block' onClick={passwordReset}>Reset</button>
                        </form>
                        <div className={styles.register}>
                            <p>Remembered your Password??</p>
                            <Link to='/login' style={{
                                margin: '0 10px'
                            }}>Login</Link>
                        </div>
                        <div className={styles.register}>
                            <p>Email not Registered??</p>
                            <Link to='/register' style={{
                                margin: '0 10px'
                            }}>Register</Link>
                        </div>
                    </div>
                </Card>
            </section >
        </>
    )
}

export default ResetPassword