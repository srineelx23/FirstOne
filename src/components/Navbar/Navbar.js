import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <ul className='nav bg-dark text-warning justify-content-center fs-4'>
        <li className='nav-item'>
            <Link className='nav-link text-warning' to="">Home</Link>
        </li>
        <li className='nav-item'>
            <Link className='nav-link text-warning' to="signup">Signup</Link>
        </li>
        <li className='nav-item'>
            <Link className='nav-link text-warning' to="signin">Signin</Link>
        </li>
        <li className='nav-item'>
            <Link className='nav-link text-warning' to="technologies">Technologies</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
