import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>
      <div className='w-full h-screen '>
      <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/5aecc44d-2a1f-4313-8399-98df20908b64/cb5dae36-1095-4528-a11a-58917b4a438f/KE-en-20221114-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="heroimage" />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen "></div>
        <div className="fixed w-full px-4 py-24 z-50">
            <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
                <div className="max-w-[320px] mx-auto py-16">
                    <h1 className="text-3xl font-bold text-center">Get back in</h1>
                    <form action="" className='w-full flex flex-col py-4'>
                        <input className='p-3 my-2 bg-gray-700 rounded' type="email" name="email" id="email" autoComplete='email' placeholder='Email' />
                        <input className='p-3 my-2 bg-gray-700 rounded' type="password" name="" id="" autoComplete='current-password' placeholder='Password' />
                        <button type="submit" className='bg-red-600 px-6 py-3 rounded text-gray-30 my-6 font-semibold'>Log in</button>
                        <div className='flex justify-between items-center text-sm text-gray-500'>
                            <p><input type="checkbox" name="" id="" /> Remember me</p>
                            <p>Need help?</p>
                        </div>
                        <p className='py-9'><span className='text-gray-500 text-sm mx-1'>Don't have an account?</span>
                        <Link to='/signup'>
                        Sign up
                        </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
