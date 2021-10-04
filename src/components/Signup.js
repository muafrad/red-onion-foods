import React from 'react';
import logo from '../assests/logo/logo2.png';
import Classes from './styles/Signup.module.css';

const Signup = () => {
    return (
        <div className={Classes.body}>
            <div>
                <img className="logo mx-auto d-block img-fluid mt-5" src={logo} width="202px" height="50px" alt="Banner" />
            </div>
            <div className="container mt-5" style={{ width: "20rem" }}>
                <form className="mt-5">
                    <input type="text" className="form-control mb-3" placeholder="Full Name" />
                    <input type="email" className="form-control mb-3" placeholder="Email" />
                    <input type="password" className="form-control mb-3" placeholder="password" />
                    <input type="password" className="form-control mb-3" placeholder="Confirm Password" />
                    <div className="d-grid gap-2">
                        <button className="btn btn-danger" type="submit">Create account</button>
                    </div>
                    <p className="text-danger text-center">Already have an account?
                        <a className="text-primary" style={{ textDecoration: "none" }} href="login.html"> Login Here </a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;