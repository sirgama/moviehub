import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import Logon from '../components/logon'
import Logo from '../assets/logo.svg'
import './Login.css'

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
        <div className="bg-white dark:bg-gray-900">
        <div className="flex justify-center h-screen logon">
            <div className="hidden bg-cover lg:block lg:w-4/6" >
                {/* <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                    <div>
                        <h2 className="text-4xl font-bold text-white">MovieHub</h2>
                        
                        <p className="max-w-xl mt-3 text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus molestiae</p>
                    </div>
                </div> */}
            </div>
            
            <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                <div className="flex-1">
                    <div className="text-start">
                        <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white"> <img
                    className=" h-16 w-auto lg:block"
                    src={Logo}
                    alt="MovieHub"
                  /></h2>
                        
                        <p className="mt-3 text-gray-500 dark:text-gray-300 font-bold">Sign in to access your account</p>
                    </div>

                    <div className="mt-8">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="example@example.com" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div className="mt-6">
                                <div className="flex justify-between mb-2">
                                    <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                    <a href="#" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                                </div>

                                <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Your Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            </div>

                            <div className="mt-6">
                                <button
                                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    Sign in
                                </button>
                            </div>

                        </form>

                        <p className="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <Link to="/signup" className="text-blue-500 focus:outline-none focus:underline hover:underline">Sign up</Link>.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
