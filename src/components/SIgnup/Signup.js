import React from 'react'
import "./Signup.css"

function Signup() {
  return (
    <div className='mt-5 p-3 '>
        <form action="" className='w-25 mx-auto text-start shadow p-5 rounded-3'>
            <div className="username mb-3 text-start">
            <label htmlFor="username" className='form-label'>Username</label>
            <input type="text" name="" id="username" className='form-control'/>
            </div>
            <div className="email mb-3 text-start">
            <label htmlFor="email" className='form-label'>E-Mail</label>
            <input type="email" name="" id="email" className='form-control'/>
            </div>
            <div className="dob mb-3 text-start">
            <label htmlFor="dob" className='form-label'>Date Of Birth</label>
            <input type="date" name="" id="dob" className='form-control'/>
            </div>
            <div className="password mb-3 text-start">
            <label htmlFor="password" className='form-label'>Password</label>
            <input type="password" name="" id="password" className='form-control'/>
            </div>
            <button type="submit" className='btn btn-warning'>Signup</button>
        </form>
    </div>
  )
}

export default Signup
