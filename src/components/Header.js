import React from 'react';
import Classes from './styles/Header.module.css';


const Header = () => {
    return (
        <header className={`${Classes.banner} text-center`}>
            <form className="col-md-6 m-auto py-5">
                <h1 className="mt-5">Best food waiting for your belly</h1>
                <div className="input-group mt-5">
                    <input type="text" className="form-control" placeholder="Search your food here" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-danger" type="button" id="button-addon2">Button</button>
                </div>
            </form>
        </header >
    );
};

export default Header;