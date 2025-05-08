import React from 'react'
import {NavLink} from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <div>
      <ul className='nav bg-dark justify-content-end p-3 fs-4'>
      <li className='nav-item'>
            <NavLink to="" className='nav-link'>Home</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink to="register" className='nav-link'>Register</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink to='login' className='nav-link'>Login</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
