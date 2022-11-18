import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.svg'
import { UserAuth } from '../context/AuthContext'


export default function Navbar() {
const {user, logOut} = UserAuth()
const navigate = useNavigate()
// console.log(user.metadata.lastSignInTime)
const handleLogout = async () =>{
    try {
        await logOut()
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

  return (
    <div className='flex items-center justify-between p-2 z-[100] absolute w-full md:p-12'>
        <img src={Logo} className='h-8 w-auto md:ml-20 md:h-14' alt="Netflix" />
        {user?.email ? <div>
            <Link to='/login'>
            <button className='text-white px-5 py-2 rounded mx-2 font-bold cursor-pointer'>Account</button>
            </Link>
            <Link to='/signup'>
            <button onClick={handleLogout} className='text-white bg-red-600 px-5 py-2 rounded mx-2 cursor-pointer'>Logout</button>
            </Link>
        </div> : <div>
            <Link to='/login'>
            <button className='text-white px-2 py-1 text-sm md:text-base font-bold rounded cursor-pointer'>Sign in</button>
            </Link>
            <Link to='/signup'>
            <button className='text-white bg-red-600 text-sm px-2 py-1 rounded mx-2 md:px-5 md:text-base font-bold md:py-3 md:mr-20 cursor-pointer'>Sign up</button>
            </Link>
        </div>}
    </div>
  )
}
