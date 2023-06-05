import React from 'react'
import styles from '../Auth.module.scss'
import resetImg from '../../../assets/reset.png'
import { Link } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
import Card from '../../../components/Card/Card'
function ResetPassword() {
    return (
        <section className={`container ${styles.auth}`}>
            <div className={styles.img}>
                <img src={resetImg} width='400px' alt="Login Image" />
            </div>
            <Card>
                <div className={`${styles.form}`}>
                    <h2>Reset Password</h2>
                    <form>
                        <input type='text' placeholder="Enter your Email" required />
                        <button className='--btn --btn-primary --btn-block'>Reset</button>
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
    )
}

export default ResetPassword