import React from 'react';
import food from '../assests/Breakfast/breakfast1.png';
import Classes from './styles/FoodDetail.module.css';

const FoodDetail = () => {
    return (
        <div className={`row ${Classes.row}`}>
            <div className={`col ${Classes.col}`}>
                <p className="h1 mb-5">Light Breakfast</p>
                <p className="text-muted">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
                    Ipsum perferendis maxime dicta nobis sit nesciunt voluptas <br />
                    quod molestiae aliquam sunt!
                </p>
                <p className="h2">$55</p>
                <button className='btn btn-danger'>
                    <span className="material-icons-outlined" style={{ color: '#fff' }}>
                        shopping_cart
                    </span> Add
                </button>
            </div>
            <div className={`col ${Classes.col}`}>
                <img src={food} width='70%' alt="Food" />
            </div>
        </div>
    );
};

export default FoodDetail;