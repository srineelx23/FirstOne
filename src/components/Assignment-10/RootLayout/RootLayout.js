import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import "./RootLayout.css"
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='bg' style={{minHeight:"80vh"}}>
        <Outlet></Outlet> 
      </div>
      <Footer></Footer>
    </div>
  )
}

export default RootLayout
