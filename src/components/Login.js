import React from 'react';
import fbLogo from '../assests/logo/fb-logo.png';
import gLogo from '../assests/logo/google-logo.png';
import logo from '../assests/logo/logo2.png';
import Classes from './styles/Signup.module.css';

const Login = () => {
    return (
        <div className={Classes.body}>
            <div>
                <img className="logo mx-auto d-block img-fluid mt-5" src={logo} width="202px" height="50px" alt="Banner" />
            </div>
            <div className="container mt-5" style={{ width: "23rem" }}>
                <form className="mt-5">
                    <input type="email" className="form-control mb-3" placeholder="Email" />
                    <input type="password" className="form-control mb-3" placeholder="password" />
                    <div className="d-grid gap-2">
                        <button className="btn btn-danger" type="button">Login</button>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <button className="btn btn-outline-primary">
                                <span>
                                    <img src={fbLogo} width="50"
                                        height="30" alt="" />
                                </span>
                                <span> Login with Facebook</span>
                            </button>
                        </div>
                        <div className="col">
                            <button className="btn btn-outline-success" >
                                <span>
                                    <img src={gLogo} width="30"
                                        height="25" alt="" />
                                </span>
                                <span> Login with Google</span>
                            </button>
                        </div>
                    </div>
                    <p className="text-danger text-center mt-3">Create an account with Email
                        <a className="text-primary" style={{ textDecoration: "none" }} href="signup.html"> Click Here </a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;