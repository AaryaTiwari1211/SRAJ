import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <footer className="footer">
            <div className="footer__addr">
                <h1 className="footer__logo"></h1>

                <h2>Contact Us Anytime</h2>

                <address>
                    B-1004 Neelsidhi Atlantis Sector 19-A Nerul (East) Navi Mumbai Maharashtra 400706<br/>
                        <a className="footer__btn" href="mailto:example@gmail.com">Email Us</a>
                </address>
            </div>

            <ul className="footer__nav">
                <li className="nav__item">
                    <h2 className="nav__title">Apparel</h2>

                    <ul className="nav__ul">
                        <li>
                            <a href="#">Sarees</a>
                        </li>

                        <li>
                            <a href="#">Kurtas</a>
                        </li>

                        <li>
                            <a href="#">Nightwear</a>
                        </li>
                    </ul>
                </li>

                <li className="nav__item">
                    <h2 className="nav__title">Wedding</h2>

                    <ul className="nav__ul">
                        <li>
                            <a href="#">Dresses</a>
                        </li>

                        <li>
                            <a href="#">Lehengas</a>
                        </li>

                        <li>
                            <a href="#">Dresses</a>
                        </li>

                        <li>
                            <a href="#">Automation</a>
                        </li>

                        <li>
                            <a href="#">Artificial Intelligence</a>
                        </li>

                        <li>
                            <a href="#">IoT</a>
                        </li>
                    </ul>
                </li>

                <li className="nav__item">
                    <h2 className="nav__title">Legal</h2>

                    <ul className="nav__ul">
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>

                        <li>
                            <a href="#">Terms of Use</a>
                        </li>

                        <li>
                            <a href="#">Sitemap</a>
                        </li>
                    </ul>
                </li>
            </ul>

            <div className="legal">
                <p>&copy; 2023 Something. All rights reserved.</p>

                <div className="legal__links">
                    <span>Made with <span className="heart">♥</span>by Aarya</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer