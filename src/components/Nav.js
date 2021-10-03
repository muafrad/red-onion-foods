import React from 'react';
import logo from '../assests/logo/logo2.png';
import Account from './Account';
import Classes from './styles/Nav.module.css';

const Nav = () => {
    return (
        <nav className={Classes.navigation}>
            <ul>
                <li>
                    <a href="index.html" className={Classes.logo}>
                        <img src={logo} alt="Red Onion Foods" />
                    </a>
                </li>
            </ul>
            <Account />
        </nav>
    );
};

export default Nav;