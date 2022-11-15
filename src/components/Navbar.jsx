import React from 'react'
import Logo from '../assets/logo.svg'

export default function Navbar() {
  return (
    <div className='flex items-center justify-between p-8 z-[100] absolute w-full'>
        <img src={Logo} width={170} alt="Netflix" />
        <div>
            <button className='text-white bg-red-600 px-5 py-2 rounded mx-2 cursor-pointer'>Sign in</button>
            <button className='text-white bg-red-600 px-5 py-2 rounded mx-2 cursor-pointer'>Sign up</button>
        </div>
    </div>
  )
}
