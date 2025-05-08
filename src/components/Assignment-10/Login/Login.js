import React from 'react'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { compareSync } from 'bcryptjs'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'

function Login() {
   let {register,handleSubmit,formState:{errors}}=useForm()
   let navigate=useNavigate()
   let [isvalid,setisvalid]=useState(false)
//    let [pwvalid,setpwvalid]=useState(false)
   

    function FormHandleSubmit(UserObj){
       fetch(`http://localhost:4000/users?username=${UserObj.username}`)
       .then(res=>res.json())
       .then(user=>{
        if(user.length===0)
            setisvalid(true)
        else{
            let result=compareSync(UserObj.password,user[0].password)
            if(result)
                navigate(`/user-dashboard/${UserObj.username}`,{state:user[0]})
            else{
                setisvalid(true)
            }
        }
       })
    }
  return (
    <div className='p-4'>
        <div className='w-25 p-4 rounded-3 mt-5 mx-auto bg-white'>
        <h1 className='text-start mb-3 '>Login</h1>
      <form action="" className=' mx-auto' onSubmit={handleSubmit(FormHandleSubmit)}>
        <div className="username mb-3">
            <input className='form-control' type="text" name="" id="username" placeholder="username" {...register("username",{required:true})}/>
            {errors.username?.type==='required' && <p className='text-danger text-start'>Enter Username</p>}
        </div>
        <div className="password mb-3">
            <input className='form-control' type="password" name="" id="password" placeholder="password"{...register("password",{required:true})}/>
            {errors.password?.type==='required' && <p className='text-danger text-start'>Enter Password</p>}
        </div>
        {isvalid && <p className='text-danger text-start'>Invalid username or password</p>}
        <Link to="/register">New User? Register Here</Link><br />
        <button type="submit" className='mt-3 btn btn-primary'>Submit</button>
      </form>
        </div>
    </div>
  )
}

export default Login
