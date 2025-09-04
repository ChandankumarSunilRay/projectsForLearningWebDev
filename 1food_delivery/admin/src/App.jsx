import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/sidebar/sidebar.jsx'
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add/Add.jsx'
import List from './pages/List/List.jsx'
import { Orders } from './pages/Order/Orders.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



const App = () => {

  const url = 'http://localhost:4000'
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/Add" element={<Add  url={url}/>} />
          <Route path="/List" element={<List  url={url}/>} />
          <Route path="/Orders" element={<Orders  url={url}/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App