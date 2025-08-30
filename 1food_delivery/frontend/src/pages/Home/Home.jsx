import ExploreMenu from "../../components/ExploreMenu/ExploreMenu.jsx"
import Header from "../../components/Header/Header.jsx"
import './home.css'
import React, { useState } from 'react'

const Home = () => {

  const [category,setCategory]=useState("All")

  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>

    </div>
  )
}

export default Home

