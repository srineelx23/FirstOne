import React from 'react'
import {Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { hashSync } from 'bcryptjs'
function Register() {
    let navigate=useNavigate()
    let {register,handleSubmit,formState:{errors}}=useForm()
    let [isvalid,setisvalid]=useState(false)
    function FormHandleSubmit(UserObj){



        let hashedpassword=hashSync(UserObj.password,5)
        UserObj.password=hashedpassword

        fetch(`http://localhost:4000/users?username=${UserObj.username}`)
        .then(res=>res.json())
        .then(users=>{
            if(users.length>0)
                setisvalid(true)
            else{

        fetch("http://localhost:4000/users",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(UserObj)
        }
        )
        .then(res=>{
            if(res.status===201){
                navigate('/login')
                console.log(res)
            }
        })
    }
})
    }
  return (
    <div className='p-4'>
        <div className='w-25 p-4 rounded-3 mt-5 mx-auto bg-white'>
        <h1 className='text-start mb-3 '>Register</h1>
      <form action="" className=' mx-auto' onSubmit={handleSubmit(FormHandleSubmit)}>
        <div className="username mb-3">
            <input className='form-control' type="text" name="" id="username" placeholder="username" {...register("username",{required:true})}/>
            {errors.username?.type==='required' && <p className='text-danger text-start'>Enter Username</p>}
        </div>
        <div className="email mb-3">
            <input className='form-control' type="email" name="" id="email" placeholder="email"{...register("email",{required:true})}/>
            {errors.email?.type==='required' && <p className='text-danger text-start'>Enter E-mail</p>}
        </div>
        <div className="password mb-3">
            <input className='form-control' type="password" name="" id="password" placeholder="password"{...register("password",{required:true})}/>
            {errors.password?.type==='required' && <p className='text-danger text-start'>Enter Password</p>}
        </div>
        {isvalid && <p className='text-danger text-start'>User Already Exists</p>}

        <Link to="/login">Already Registered?</Link><br />
        <button type="submit" className='mt-3 btn btn-primary'>Submit</button>
      </form>
        </div>
    </div>
  )
}

export default Register
