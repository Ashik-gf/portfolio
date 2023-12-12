import React from 'react'
import Navbar from '../component/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Home/Footer'



const MainLayOut = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default MainLayOut