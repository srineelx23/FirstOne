import React from 'react'
import {Link} from 'react-router-dom'
import { Outlet } from 'react-router-dom'
function Technologies() {
  return (
    <div className='w-50 mx-auto mt-5'>
      <ul className='nav justify-content-center fs-3  gap-4'>
        <li className='nav-item '>
            <Link to="angular" className='rounded-3 text-warning bg-dark nav-link'>Angular</Link>
        </li>
        <li className="nav-item">
            <Link to="react" className='rounded-3 nav-link bg-dark text-warning'>React</Link>
        </li>
        <li className="nav-item">
            <Link to ="vue"className='rounded-3 text-warning bg-dark nav-link'>Vue</Link>
        </li>
      </ul>
      <Outlet></Outlet>
    </div>
  )
}

export default Technologies
