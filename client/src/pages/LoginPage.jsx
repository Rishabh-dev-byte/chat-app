import React, { useState } from 'react'
import assets from '../assets/assets'

const LoginPage = () => {
  const[currState,setCurrstate] = useState("sign-up")
  const[fullName,setFullname] = useState("")
  const[Email,setEmail] = useState("")
  const[Bio,setBio] = useState("")
  const[Password,setPassword] = useState("")
  const[isDataSubmitted,setisDataSubmitted] = useState("")

  return (
    <div className='min-h-screen bg-cover bg-center flex items-center justify-center gap-8
    backdrop-blur-2xl sm:justify-evenly max-sm:flex-col '>
      {/* ---left---- */}
      <img src={assets.logo_big} alt='' className='max-w-50'/>
      {/* ----right---- */}
      <form className='border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg'>
       <h2 className='flex'>{currState}
        <img src={assets.arrow_icon} className='w-5 cursor-pointer'/>
       </h2>
       {currState === "sign-up" && !isDataSubmitted && (
        <input onClick={(e)=>{setFullname(e.target.value)}} value={fullName} type='text' className='p-2 border border-gray-500 rounded-md focus:outline-none
        'placeholder='Full Name' required/>
       )}
       {!isDataSubmitted && 
        <>
        <input onClick={(e)=>{setEmail(e.target.value)}} value={Email} type='email'placeholder='Email' required className='p-2 border border-gray-500 rounded-md focus:outline-none'/>
        <input onClick={(e)=>{setPassword(e.target.value)}} value={Password} type='password'placeholder='Password' required className='p-2 border border-gray-500 rounded-md focus:outline-none'/>
        </>
       }
      </form>

    </div>
  )
}

export default LoginPage