import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import "./UserDashBoard.css"
function UserDashBoard() {

  let {state}=useLocation()
  // useEffect(()=>{
  //   fetch('http://localhost:4000/users')
  //   .then(res=>res.json())
  //   .then(users=>setUsers(users))
  // },[])

  return (
    <div className='p-3'>
      <div className=' w-25 text-start mx-auto p-3 rounded-4'>
      <h1>Welcome <span className='text-white display-4'>{state.username}</span></h1>
      <div className='details text-start mt-5 p-2 rounded-3'>
        <h3>Your Details Are:</h3>
        <p className="fs-3">Username: <span>{state.username}</span></p>
        <p className="fs-3">Email: <span>{state.email}</span></p>
      </div>
      </div>
    </div>
  )
}

export default UserDashBoard
