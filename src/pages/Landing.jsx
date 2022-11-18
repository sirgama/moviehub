import React from "react";
import { RoughNotation } from "react-rough-notation";
import { Link } from "react-router-dom";
import Row from '../components/Row'
import requests from '../Requests'

export default function Landing() {
  return (
    <div className="w-full h-full ">
      <div className="w-full h-screen ">
        <div className="absolute w-full h-screen bg-gradient-to-r from-black"></div>
        <img
          src="https://image.tmdb.org/t/p/original/nnUQqlVZeEGuCRx8SaoCU4XVHJN.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute top-[30%] md:p-5 md:m-5 md:px-20 z-1">
          <h1 className="text-gray-300 text-5xl lg:text-7xl font-black my-3 sm:my-7 lg:px-10">
            Take{" "}
            <RoughNotation
              type="box"
              show={true}
              color="#DE1D8D"
              animationDelay={2000}
              animationDuration={3500}
              className="text-slate-200"
            >
              <span className="text-pink-500">Your</span>
            </RoughNotation>{" "}
            watching <br />{" "}
          </h1>

          <h1 className="text-gray-300 text-5xl lg:text-7xl font-black my-3 sm:my-7 lg:px-20">
            {" "}
            <RoughNotation
              animate="true"
              type="underline"
              show={true}
              color="#DE1D8D"
              animationDelay={1000}
              animationDuration={2500}
              className="text-slate-200"
            >
              <span className="text-pink-500">Experience</span>
            </RoughNotation>{" "}
            to the <br />{" "}
          </h1>
          <h1 className="text-gray-300 text-5xl lg:text-7xl font-black my-3 sm:my-7 lg:px-20 lg:mx-20">
            next <span className="text-pink-500">Level</span> innit.
          </h1>
          <div className="lg:flex justify-around">
            <button className="">
            
          </button>
          <Link to='/signup'><button className="text-gray-200 font-bold my-6 px-8 py-3 bg-pink-500 rounded shadow-lg  md:mx-20  ">
            Get Started
          </button></Link>
          </div>
          
        </div>
      </div>

    <div className="w-full p-5  ">
      <div className="w-full md:w-2/3  mx-auto">
        <div className="flex justify-between md:my-6">
          <h3 className=" text-white text-sm md:text-xl font-bold underline decoration-indigo-500">Well curated movies</h3>
          <h6 className="text-white text-sm md:text-xl font-bold underline decoration-indigo-500">See all</h6>
        </div>
          
          <div>
          <Row rowId='2' title='Most popular movies' fetchUrl={requests.requestPopular}/>
          </div>
         
      </div>
      
    </div>
    <div className="text-white w-full bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <h1 className="text-4xl text-center p-5 my-8 font-bold ">What we <br /> <span className="underline decoration-sky-500">Actually offer</span> </h1>
            <div className="flex flex-wrap justify-around md:flex-nowrap w-5/6 mx-auto">
              <div className="flex flex-col  p-6 md:p-1 m-10">
                  <h3 className="text-4xl text-center font-bold text-cyan-200">800+</h3>
                  <h5 className="text-base my-4 font-bold">Movies and tv shows</h5>
              </div>
              <div className="flex flex-col p-6 md:p-1 m-10">
                  <h3 className="text-4xl text-center font-bold text-emerald-200">16k+</h3>
                  <h5 className="text-base my-4 font-bold">listed episodes</h5>
              </div>
              <div className="flex flex-col  p-6 md:p-1 m-10">
                  <h3 className="text-4xl text-center font-bold text-emerald-200">HD+</h3>
                  <h5 className="text-base my-4 font-bold">Images and videos</h5>
              </div>
              <div className="flex flex-col  p-6 md:p-1  m-10">
                  <h3 className="text-4xl text-center font-bold text-emerald-200">Easy</h3>
                  <h5 className="text-base my-4 font-bold">Well organized movie categorization</h5>
              </div>
            </div>
          </div>
    </div>
  );
}
