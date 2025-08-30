import React from 'react';
import './FoodItem.css'
import { frontend_assets } from '../../assets/frontend_assets/frontend_assets'

const FoodItem = ({ id, name, price, description, image }) => {
    return (
        <div className="food-item">
            <div className="food-item-image-container">
                <img className='food-item-image' src={image} alt="loading" />
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={frontend_assets.rating_starts} alt="loading" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">₹{price}</p>
            </div>
        </div>
    )
}

export default FoodItem
