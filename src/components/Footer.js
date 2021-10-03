import React from 'react';
import logo from '../assests/logo/logo.png';
import Classes from './styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={Classes.footer}>
            <div className={Classes.footerContainer}>
                <div className={Classes.footerRow}>
                    <div className={Classes.footerCol}>
                        <img src={logo} alt="" />
                    </div>
                    <div className={Classes.footerCol}>
                        <h4>get help</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">shipping</a></li>
                            <li><a href="#">returns</a></li>
                            <li><a href="#">order status</a></li>
                            <li><a href="#">payment options</a></li>
                        </ul>
                    </div>
                    <div className={Classes.footerCol}>
                        <h4>company</h4>
                        <ul>
                            <li><a href="#">about us</a></li>
                            <li><a href="#">our services</a></li>
                            <li><a href="#">privacy policy</a></li>
                            <li><a href="#">affiliate program</a></li>
                        </ul>
                    </div>
                    <div className={Classes.footerCol}>
                        <h4>follow us</h4>
                        <div className={Classes.sLinks}>
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;