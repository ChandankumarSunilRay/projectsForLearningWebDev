import React, { useState } from 'react'
import './LoginPopup.css'
import { frontend_assets } from '../../assets/frontend_assets/frontend_assets'


const LoginPopup = ({ setShowLogin }) => {

    const [currState, setCurrState] = useState("Sign Up")

    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={frontend_assets.cross_icon} alt="loading" />
                </div>
                <div className="login-popup-input">
                    {currState==="Login"?<></>:  <input type="text" placeholder='Your name ' required/>}
                    <input type="email" placeholder='Your email' required />
                    <input type="password" placeholder='Password' required />
                    <button>{currState==="Sign Up"?"Create account":"Login"}</button>

                </div>
                <div className="login-popup-condition">
                    <input type="checkbox" required/>
                    <p>By continuing, i agree to the terms of use & Privacy policy</p>
                </div>
                {currState==="Login"
                ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
                :<p>Already have an account <span onClick={()=>setCurrState("Login")}>Login here</span></p>
                }
                
            </form>
        </div>
    )
}


export default LoginPopup