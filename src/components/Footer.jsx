import React from 'react'
import Logo from '../assets/logo.svg'

export default function Footer() {
  return (
    <div>
      <footer className="p-4 bg-gray-900 rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
    <div className="sm:flex sm:items-center sm:justify-between">
        <a href="https://movies.sirgama.dev.com/" className="flex items-center mb-4 sm:mb-0">
            <img src={Logo} className="mr-3 h-8" alt="MovieHub Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="/login" className="mr-4 hover:underline md:mr-6 ">Login</a>
            </li>
            <li>
                <a href="/signup" className="mr-4 hover:underline md:mr-6">Sign up</a>
            </li>
            <li>
                <a href="https://twitter.com/sirgama_" className="mr-4 hover:underline md:mr-6 ">Social</a>
            </li>
            <li>
                <a href="mailto:contact@sirgama.dev" className="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://movies.sirgama.dev.com/" className="hover:underline">MovieHub by SirGama™</a>. 
    </span>
</footer>
    </div>
  )
}
