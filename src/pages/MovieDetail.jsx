import axios from 'axios'
import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { food } from '../openkey'
import {useParams} from "react-router-dom"
import Movieheader from '../components/Movieheader'
import Datecalc from '../components/Datecalc'


export default function MovieDetail(props) {

    const [singleMovie, setSingleMovie] = useState([])
    const {movie_id} = useParams()
    console.log(singleMovie)
    

    const getMovie = () =>{
        axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${food}&language=en-US`).then((res) => {

            const moviesfetch = res.data
            setSingleMovie(moviesfetch)
        })
    }
 
    useEffect(()=> {
       getMovie()
    }, [`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${food}&language=en-US`])

    const moviedate = singleMovie?.release_date
    let yr = new Date(moviedate)
    let date = Datecalc(yr)
    console.log(date)
    
  return (
    <div>
      <div className="w-full h-screen md:h-[650px] text-white">
    <div className='w-full h-full'>
        <div className="absolute w-full h-screen md:h-[650px] bg-gradient-to-t from-black via-gray-900"></div>
        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original${singleMovie?.backdrop_path}`} alt={singleMovie?.title} />
        <div className='absolute top-[5%] md:top-[10%] p-5 m-5 flex flex-row flex-wrap sm:flex-nowrap'>
        <div>
        <div className='w-[240px] sm:w-[240px] lg:w-[280px] h-96 inline-block cursor-pointer relative p-3 md:p-0'>
            <img className='w-auto h-full block bg-cover bg-center rounded-lg shadow-2xl shadow-pink-500/20' src={`https://image.tmdb.org/t/p/w500${singleMovie?.poster_path}`} alt='single ' />
            
            </div>
        </div>
            
        <div className='md:mx-20 md:px-10'>
        <h1 className='text-2xl md:text-5xl font-semibold '>{singleMovie?.title}</h1>
            <div className='my-4'>
                <p className='text-gray-00 text-base'><span className='font-semibold text-white'></span></p>
                <button className='text-gray-100 '>Average rating: <span className='text-sm font-semibold'>{singleMovie?.vote_average}</span> </button>
                <button className='text-gray-100 px-2 '>Votes: <span className='text-sm font-extrabold'>{singleMovie?.vote_count}</span></button>
            </div>
            <div className='my-4'>
                <button className='text-black border bg-pink-300 px-5 py-1'>Play</button>
                <button className='text-white   px-5 py-2 ml-4 font-medium'>Read more ...</button>
            </div>
            <p className='text-gray-00 text-sm'>Release date: <span className='font-semibold text-white'>{singleMovie?.release_date}</span></p>
            <p className="w-full text-gray-100 md:font-semibold text-sm py-2 ">{singleMovie?.overview}</p>
        </div>
        </div>
    </div>
    </div>

    </div>
  )
}
