import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/sidebar/sidebar.jsx'
import {Routes,Route} from 'react-router-dom'
import Add from './pages/Add/Add.jsx'
import List from './pages/List/List.jsx'
import { Orders } from './pages/Order/Orders.jsx'


const App = () => {


  return (
    <div>
      <Navbar/>
      <hr />
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path="/Add" element={<Add/>}/>
          <Route path="/List" element={<List/>}/>
          <Route path="/Orders" element={<Orders/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App