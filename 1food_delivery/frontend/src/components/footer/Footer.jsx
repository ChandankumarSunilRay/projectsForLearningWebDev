import React from 'react'
import './Footer.css'
import { frontend_assets } from '../../assets/frontend_assets/frontend_assets'


const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={frontend_assets.logo} alt="loading" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quibusdam culpa fugit eligendi ullam nulla!</p>
                    <div className="footer-social-icon">
                        <img src={frontend_assets.facebook_icon} alt="loading" />
                        <img src={frontend_assets.twitter_icon} alt="loading" />
                        <img src={frontend_assets.linkedin_icon} alt="loading" />
                    </div>
                </div>
                <div className="footer-content-right">
                    <h2>COMANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 9987521999</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>Copyright 2024 Tomato.com -All Rights Reserved </p>
        </div> 

    )
}

export default Footer