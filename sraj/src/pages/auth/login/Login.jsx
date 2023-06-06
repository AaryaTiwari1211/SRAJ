import React, { useState } from 'react'
import styles from '../Auth.module.scss'
import loginImg from '../../../assets/login.png'
import { Link } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
import Card from '../../../components/Card/Card'
import Loader from '../../../components/Loader/Loader'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase/firebase'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    const loginUser = (e) => {
        e.preventDefault();
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setLoading(false)
                toast.success("Logged in Successfully")
                navigate('/')
            })
            .catch((error) => {
                toast.error("An Error occured!!")
                setLoading(false)
            });
    }
    const signinwithGoogle = (e) => {
        e.preventDefault();
        setLoading(true)
        signInWithPopup(auth, provider)
            .then(() => {
                setLoading(false)
                navigate('/')
                toast.success("Logged in successfully")
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                setLoading(false)
                toast.error(errorMessage)
            });
    }
    return (
        <>
            {loading && <Loader />}
            <section className={`container ${styles.auth}`}>
                <div className={styles.img}>
                    <img src={loginImg} width='400px' alt="Login Image" />
                </div>
                <Card>
                    <div className={`${styles.form}`}>
                        <h2>Login</h2>
                        <form onSubmit={loginUser}>
                            <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email" required />
                            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" required />
                            <button type='submit' className='--btn --btn-primary --btn-block'>Login</button>
                        </form>
                        <div className={styles.links}>
                            <Link to='/resetpassword'>Reset Password</Link>
                        </div>
                        <p style={{
                            textAlign: 'center'
                        }}>-- or --</p>
                        <button className='--btn --btn-danger --btn-block' onClick={signinwithGoogle}><FaGoogle style={{
                            margin: '0 5px',
                            alignItems: 'center'
                        }} color='#fff' />Sign in with Google</button>
                        <div className={styles.register}>
                            <p>Dont have an Account??</p>
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

export default Login