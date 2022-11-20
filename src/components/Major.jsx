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
        <div className="absolute w-full h-screen md:h-[650px] bg-gradient-to-t from-black  "></div>
        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original${singleMovie?.backdrop_path}`} alt={singleMovie?.title} />
        <div className='absolute top-[40%]  md:top-[30%] md:left-[20%] p-2 m-5 flex flex-row flex-wrap sm:flex-nowrap justify-center items-center'>
        {/* <div>
        <div className='w-[240px] sm:w-[240px] lg:w-[280px] h-96 inline-block cursor-pointer relative p-3'>
            <img className='w-auto h-full block bg-cover bg-center rounded-lg shadow-3xl' src={`https://image.tmdb.org/t/p/w500${singleMovie?.poster_path}`} alt='single ' />
            
            </div>
        </div> */}
            
        <div className='md:mx-20 md:px-20'>

            <form action="">
                <input className='bg-transparent border-b-4 border-pink-700 placeholder:text-white placeholder:text-md  md:w-[600px] py-2 focus:outline-none block w-[300px]' type="text" name="" id="" placeholder='Search for a movie or TV show' />
            </form>
        
            <div className='my-4'>
            <p className='text-sm md:text-sm font-semibold '><span className="text-gray-400">Background image movie: </span> {singleMovie?.title && singleMovie?.title}</p>
              
            </div>
            {/* <div className='my-4'>
                <button className='text-black border bg-pink-300 px-5 py-1'>Play</button>
                <button className='text-white   px-5 py-2 ml-4 font-medium'>Read more ...</button>
            </div> */}
            <p className='text-gray-400 text-sm'>Release date: <span className='font-bold text-white'>{singleMovie?.release_date && singleMovie?.release_date}</span></p>
            {/* <p className="w-full text-gray-100 text-sm py-2 md:max-w-[70%] lg:max-w-[50%] xl:max-w-30%">{truncateString(singleMovie?.overview, 150)}</p> */}
        </div>
        </div>
    </div>
    </div>
  )
}
