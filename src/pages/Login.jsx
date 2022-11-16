import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

export default function Login() {
    const [email, setEmail] = useState('')
    const [errorr, setError] = useState('')
    const [password, setPassword] = useState('')
    const {user, login} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await login(email, password)
            navigate('/home')
        } catch (error) {
            console.log(error)
            setError(error.message)
        }
    }

   
  return (
    <div>
      <div className='w-full h-screen '>
      <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/5aecc44d-2a1f-4313-8399-98df20908b64/cb5dae36-1095-4528-a11a-58917b4a438f/KE-en-20221114-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="heroimage" />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen "></div>
        <div className="fixed w-full px-4 py-24 z-50">
            <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
                <div className="max-w-[320px] mx-auto py-16">
                    <h1 className="text-3xl font-bold text-center">Get back in</h1>
                    {errorr && <div className="flex p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800" role="alert">
                    <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                    <span className="sr-only">Info</span>
                    <div>
                        <span className="font-medium"></span> {errorr}.
                    </div>
                    </div>}
                    <form onSubmit={handleSubmit} action="" className='w-full flex flex-col py-4'>
                        <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="email" name="email" id="email" autoComplete='email' placeholder='Email' />
                        <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="password" name="" id="" autoComplete='current-password' placeholder='Password' />
                        <button type="submit" className='bg-red-600 px-6 py-3 rounded text-gray-30 my-6 font-semibold'>Log in</button>
                        <div className='flex justify-between items-center text-sm text-gray-500'>
                            <p><input type="checkbox" name="checkRef" id="checkbox" /> Remember me</p>
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
