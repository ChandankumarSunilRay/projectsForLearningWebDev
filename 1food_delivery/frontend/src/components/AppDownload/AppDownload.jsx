import React from 'react'
import './AppDownload.css'
import { frontend_assets } from '../../assets/frontend_assets/frontend_assets'


const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p> For Better Experiance Download <br />Tomato App</p>
        <div className='app-download-platform'>
            <img src={frontend_assets.play_store} alt="" />
            <img src={frontend_assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload