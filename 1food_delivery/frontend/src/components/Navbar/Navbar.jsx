// import { admin_assets } from '../../assets/admin_assets/admin_assets.js'
import { frontend_assets } from '../../assets/frontend_assets/frontend_assets.js'
import { StoreContext } from '../../context/StoreContext.jsx'
import './Navbar.css'
import React, { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("mobile-app");
    const {getTotalCartAmount,token,setToken} = useContext(StoreContext)

    
    const navigate = useNavigate();
    const logout = ()=>{
        localStorage.removeItem("token")
        setToken("");
        navigate("/")
    }



    return (
        <div className='navbar'>
            <Link to={'/'}><img src={frontend_assets.logo} alt="Loading" /></Link>
            <ul className="navbar-menu">
                <Link to='/' onClick={() => { setMenu("home") }} className={menu === "home" ? "active" : ""}>home</Link>
                <a href='#explore-menu' onClick={() => { setMenu("menu") }} className={menu === "menu" ? "active" : ""}>menu</a>
                <a href='#app-download' onClick={() => { setMenu("mobile-app") }} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
                <a href='#footer' onClick={() => { setMenu("contact-app") }} className={menu === "contact-app" ? "active" : ""}>contact-app</a>
            </ul>
            <div className="navbar-right">
                <img src={frontend_assets.search_icon} alt="Loading" />
                <div className='navbar-search-icon'>
                    <Link to={"/cart"}><img src={frontend_assets.basket_icon} alt="loading" /></Link>
                    <div className={getTotalCartAmount()===0?"":"dot"}></div>

                </div>
                {!token? <button onClick={()=>setShowLogin(true)}>Sign in</button>
                :<div className='navbar-profile'>
                        <img src={frontend_assets.profile_icon} alt="" />
                        <ul className="nav-profile-dropdown">
                            <li><img src={frontend_assets.bag_icon} alt="" /><p>Orders</p></li>
                            <hr />
                            <li onClick={logout}><img src={frontend_assets.logout_icon} alt="" />Logout</li>
                        </ul>
                </div>}

                
            </div>
        </div>
    )
}

export default Navbar



