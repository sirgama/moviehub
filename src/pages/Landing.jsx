import React from 'react'
import { RoughNotation } from 'react-rough-notation'

export default function Landing() {
  return (
    <div className='w-full h-full '>
      <div className="w-full h-screen">
      <div className="absolute w-full h-screen bg-gradient-to-r from-black"></div>
      <img src="https://image.tmdb.org/t/p/original/nnUQqlVZeEGuCRx8SaoCU4XVHJN.jpg" alt="" className="w-full h-full object-cover" />
      <div className="absolute top-[20%] p-5 m-5">
            <h1 className="text-gray-300 text-5xl md:text-7xl font-black my-3 sm:my-7">Take <RoughNotation  type="box"
                show={true}
                color="#DE1D8D"
                animationDelay={2000}
                animationDuration={3500}
                className="text-slate-200"><span className="text-pink-500">Your</span></RoughNotation>   watching <br /> </h1>
            
            <h1 className="text-gray-300 text-5xl md:text-7xl font-black my-3 sm:my-7"> <RoughNotation  animate="true"
                type="underline"
                show={true}
                color="#DE1D8D"
                animationDelay={1000}
                animationDuration={2500}
                className="text-slate-200"><span className="text-pink-500">Experience</span></RoughNotation>  to the <br /> </h1>
            <h1 className="text-gray-300 text-5xl md:text-7xl font-black my-3 sm:my-7">next  <span className="text-pink-500">Level</span> innit.</h1>
            <button className='text-gray-200 font-bold my-6 px-8 py-3 bg-pink-500 rounded '>Get Started</button>
      </div>
      </div>

    </div>
  )
}
