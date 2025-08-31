import { admin_assets } from '../../assets/admin_assets/admin_assets.js'
import { frontend_assets } from '../../assets/frontend_assets/frontend_assets.js'
import './Navbar.css'
import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

    const [menu, setMenu] = useState("mobile-app");

    return (
        <div className='navbar'>
            <img src={frontend_assets.logo} alt="Loading" />
            <ul className="navbar-menu">
                <Link to='/' onClick={() => { setMenu("home") }} className={menu === "home" ? "active" : ""}>home</Link>
                <a href='#explore-menu' onClick={() => { setMenu("menu") }} className={menu === "menu" ? "active" : ""}>menu</a>
                <a href='#app-download' onClick={() => { setMenu("mobile-app") }} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
                <a href='#footer' onClick={() => { setMenu("contact-app") }} className={menu === "contact-app" ? "active" : ""}>contact-app</a>
            </ul>
            <div className="navbar-right">
                <img src={frontend_assets.search_icon} alt="Loading" />
                <div className='navbar-search-icon'>
                    <img src={frontend_assets.basket_icon} alt="" />
                    <div className="dot"></div>

                </div>
                <button>Sign in</button>
            </div>
        </div>
    )
}

export default Navbar



