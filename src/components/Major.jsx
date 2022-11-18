import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../Requests'

export default function Major() {
    const [movies, setMovies] = useState([])

    
    const getMovies = () =>{
        axios.get(requests.requestPopular).then((res) => {

            const moviesfetch = res.data
            setMovies(moviesfetch.results)
        })
    }
    // useEffect(()=> {
    //     const interval = setInterval(() => {
    //         getMovies()
    //     }, 1000000)

    //     return () => clearInterval(interval)
    // }, [])
    useEffect(()=> {
       getMovies()
    }, [])

    let singleMovie = movies[Math.floor(Math.random() * movies.length)]
    const truncateString = (str, num) =>{
        if(str?.length > num){
            return str.slice(0, num) + '...'
        }
        else{
            return str
        }
    }

    console.log(movies)
  return (
    <div className="w-full h-screen md:h-[650px] text-white">
    <div className='w-full h-full'>
        <div className="absolute w-full h-screen md:h-[650px] bg-gradient-to-r from-black"></div>
        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original${singleMovie?.backdrop_path}`} alt={singleMovie?.title} />
        <div className='absolute top-[20%] p-5 m-5 flex flex-row flex-wrap sm:flex-nowrap'>
        <div>
        <div className='w-[240px] sm:w-[240px] lg:w-[280px] h-96 inline-block cursor-pointer relative p-3'>
            <img className='w-auto h-full block bg-cover bg-center rounded-lg shadow-3xl' src={`https://image.tmdb.org/t/p/w500${singleMovie?.poster_path}`} alt='single ' />
            
            </div>
        </div>
            
        <div className='md:mx-20 md:px-10'>
        <h1 className='text-2xl md:text-5xl font-extrabold '>{singleMovie?.title}</h1>
            <div className='my-4'>
                <button className='text-black border bg-pink-300 px-5 py-1'>Play</button>
                <button className='text-white border  px-5 py-2 ml-4 font-medium'>Watch later</button>
            </div>
            <p className='text-gray-400 text-sm'>Release date: {singleMovie?.release_date}</p>
            {/* <p className="w-full text-gray-100 text-sm py-2 md:max-w-[70%] lg:max-w-[50%] xl:max-w-30%">{truncateString(singleMovie?.overview, 150)}</p> */}
        </div>
        </div>
    </div>
    </div>
  )
}
