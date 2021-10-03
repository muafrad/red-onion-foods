import React from 'react';
import Classes from './styles/Account.module.css';

const Account = () => {
    return (
        <div className={Classes.account}>
            <span className="material-icons-outlined" title="Cart">
                shopping_cart
            </span>
            <button className="btn btn-sm" href="login.html">Login</button>
            <button className="btn btn-danger btn-sm" href="signup.html">Sign up</button>
            {/* <span className="material-icons-outlined" title="Logout"> logout </span> */}
        </div>
    );
};

export default Account;