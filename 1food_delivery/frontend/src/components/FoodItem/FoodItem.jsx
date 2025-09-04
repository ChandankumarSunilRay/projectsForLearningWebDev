import React, { useState, useContext } from 'react';
import './FoodItem.css'
import { frontend_assets } from '../../assets/frontend_assets/frontend_assets'
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItem, addToCart, removeFromCart ,url } = useContext(StoreContext);

    return (
        <div className="food-item">
            <div className="food-item-image-container">
                <img className='food-item-image' src={url+"/images/"+image} alt="loading" />
                {!cartItem[id]
                    ? <img 
                        className='add' 
                        onClick={() => addToCart(id)}
                        src={frontend_assets.add_icon_white} 
                        alt='loading' 
                      />
                    : <div className='food-item-counter'>
                        <img 
                          onClick={() => removeFromCart(id)} 
                          src={frontend_assets.remove_icon_red} 
                          alt="Loading" 
                        />
                        <p>{cartItem[id]}</p>
                        <img 
                          onClick={() => addToCart(id)} 
                          src={frontend_assets.add_icon_green} 
                          alt="Loading" 
                        />
                      </div>
                }
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

export default FoodItem;
