import React from "react";
import { RoughNotation } from "react-rough-notation";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Row from '../components/Row'
import requests from '../Requests'

export default function Landing() {
  return (
    <div className="w-full h-full ">
      <Navbar />
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
    <div className="text-white w-full bg-gradient-to-r ">
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
                  <h5 className="text-base my-4 text-center font-bold">Well organized movie categorization</h5>
              </div>
            </div>
    </div>
    <div className="w-full relative">
      <h1 className="text-center my-10 p-4 text-3xl md:text-4xl font-bold text-cyan-200 "> <span className="border-t-4 border-b-4 py-2 px-6 border-l-zinc-500 border-b-pink-500 border-t-sky-500">Coming Soon</span></h1>
      <div className="md:w-2/3 mx-auto lg:hidden" >
      <iframe width="375" height="270"
        src="https://www.youtube.com/embed/bKh2G73gCCs">
        </iframe>
      </div>
      <div className="w-4/6 mx-auto hidden lg:block  ">
      <iframe width="1020" height="640" className=" "
        src="https://www.youtube.com/embed/bKh2G73gCCs?playlist=bKh2G73gCCs&loop=0&controls=1">
        </iframe>
      </div>
    </div>

    <div className="w-full text-white text-center">
      <div className="my-20">
      <h2 className="text-4xl font-bold py-2 mt-20 mb-9">Love to get updates?</h2>
      <p className="text-sm text-gray-400">Subscribe to get new updates on movies and content straight to your inbox. No Spam! No Ads!</p>
      
        <div className="my-16">
           <form action="" className="">
            <input className="bg-black border-2 rounded-tl text-white rounded-bl border-pink-500 py-3 px-7 md:px-20" type="email" name="" id="" placeholder="Enter your Email" />
            <button className="py-3 bg-pink-500 px-4 md:px-10 rounded-tr rounded-br border-2 border-pink-500">Subscribe</button>
            </form>
        </div>
    </div>
    </div>

    <Footer />
    </div>
  );
}
