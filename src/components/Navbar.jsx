import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.svg'

export default function Navbar() {
  return (
    <div className='flex items-center justify-between p-8 z-[100] absolute w-full'>
        <img src={Logo} width={170} alt="Netflix" />
        <div>
            <Link to='/login'>
            <button className='text-white bg-red-600 px-5 py-2 rounded mx-2 cursor-pointer'>Sign in</button>
            </Link>
            <Link to='/signup'>
            <button className='text-white bg-red-600 px-5 py-2 rounded mx-2 cursor-pointer'>Sign up</button>
            </Link>
        </div>
    </div>
  )
}
