import axios from 'axios'
import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { food } from '../openkey'
import {useParams} from "react-router-dom"
import Movieheader from '../components/Movieheader'
import Datecalc from '../components/Datecalc'
import {AiFillYoutube} from 'react-icons/ai'


export default function MovieDetail(props) {

    const [singleMovie, setSingleMovie] = useState([])
    const [videos, setVideos] = useState([])
    const [credits, setCredits] = useState([])
    const {movie_id} = useParams()
    console.log(singleMovie)

    const getMovie = () =>{
        axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${food}&language=en-US`).then((res) => {
            const moviesfetch = res.data
            setSingleMovie(moviesfetch)
        })
    }
    const getVideos = () =>{
        axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${food}&language=en-US`).then((res) => {
            const videosfetch = res.data
            setVideos(videosfetch.results)
        })
    }
    const getCredits = () =>{
        axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${food}&language=en-US`).then((res) => {
            const creditsfetch = res.data
            setCredits(creditsfetch)
        })
    }
 
 
    useEffect(()=> {
       getMovie()
    }, [])
    useEffect(()=> {
        getVideos()
     }, [])

     useEffect(()=> {
        getCredits()
     }, [])


    const moviedate = singleMovie?.release_date
    let yr = new Date(moviedate)
    let date = Datecalc(yr)
    console.log(date)

    const movieTime =  singleMovie?.runtime
    let time = Math.round(movieTime / 60)
    console.log(credits)

    const mvg = singleMovie?.genres
    console.log(videos)
   
    let getYoutube = videos.filter(function (el) {
        return el.type === 'Trailer'
    })
    let trailer = getYoutube[0]
  return (
    <div>
      <div className="w-full h-screen md:h-[650px] text-white">
    <div className='w-full h-full'>
        <div className="absolute w-full h-screen md:h-[650px] bg-gradient-to-t from-black via-gray-900"></div>
        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original${singleMovie?.backdrop_path}`} alt={singleMovie?.title} />
        <div className='absolute top-[5%] md:top-[10%] p-5 m-5 flex flex-row flex-wrap sm:flex-nowrap'>
        <div>
        <div className='w-[240px] sm:w-[240px] lg:w-[280px] h-96 sm:h-96 inline-block cursor-pointer relative p-3 md:p-0'>
            <img className='w-auto h-full block bg-cover bg-center rounded-lg shadow-2xl shadow-pink-500/20' src={`https://image.tmdb.org/t/p/w500${singleMovie?.poster_path}`} alt='single ' />
            <button className="border text-center inline-block md:my-4 w-[210px] md:w-[250px] p-2 my-6 md:px-4 rounded-md bg-gray-100 text-black font-semibold"><AiFillYoutube className='inline' /> Play Trailer</button>
        </div>
        </div>
            
        <div className='md:mx-20 md:px-10 md:my-0 my-10'>
        <h1 className='text-2xl md:text-5xl font-semibold '>{singleMovie?.title}</h1>
            <div className='my-4'>
                <p className='text-gray-00 text-base'><span className='font-semibold text-white'>{mvg? mvg.map(genre => <div className='px-5 py-1 border border-white rounded-full inline-block md:mx-2 hover:bg-gray-200 hover:text-black cursor-pointer'>{genre.name}</div>) : null}</span> <span className="text-xl font-bold p-2"> ~ </span> <br className=' sm:hidden' /><span className='font-semibold text-white md:text-xl'>{date}</span>  <span className="text-xl font-bold p-2"> ~ </span><span className='font-semibold text-white md:text-xl'>{time}h</span></p>
                
            </div>
            <p className="w-full text-gray-100 md:font-semibold text-sm py-2 md:text-xl">{singleMovie?.overview}</p>
            <div className="my-0">
            <button className='text-gray-100 md:my-6 '>Rating: <span className='text-5xl font-semibold'>{Math.round(singleMovie?.vote_average)}</span>/ 10 </button>
                <button className='text-gray-100 px-2 md:px-10 '>Votes: <span className='text-sm font-extrabold md:text-3xl'>{singleMovie?.vote_count}</span></button>
            </div>
            <div className='my-4'>
                <button className='text-black border bg-pink-300 px-5 py-1'>Play</button>
                <button className='text-white   px-5 py-2 ml-4 font-medium'>Read more ...</button>
            </div>
        </div>
        </div>
    </div>
    </div>

    </div>
  )
}
