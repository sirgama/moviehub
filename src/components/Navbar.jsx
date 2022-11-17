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
    <div className='flex items-center justify-between p-8 z-[100] fixed w-full'>
        <img src={Logo} width={170} alt="Netflix" />
        {user?.email ? <div>
            <Link to='/login'>
            <button className='text-white px-5 py-2 rounded mx-2 font-bold cursor-pointer'>Account</button>
            </Link>
            <Link to='/signup'>
            <button onClick={handleLogout} className='text-white bg-red-600 px-5 py-2 rounded mx-2 cursor-pointer'>Logout</button>
            </Link>
        </div> : <div>
            <Link to='/login'>
            <button className='text-white bg-red-600 px-5 py-2 rounded mx-2 cursor-pointer'>Sign in</button>
            </Link>
            <Link to='/signup'>
            <button className='text-white bg-red-600 px-5 py-2 rounded mx-2 cursor-pointer'>Sign up</button>
            </Link>
        </div>}
    </div>
  )
}
