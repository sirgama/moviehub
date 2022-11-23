import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import Datecalc from '../components/Datecalc'
import {AiFillYoutube, AiOutlineLink} from 'react-icons/ai'
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react'
import Posters from '../components/Posters'
import Backdrops from '../components/Backdrops'
import Reviews from '../components/Reviews'
import Actors from '../components/Actors'
import Recommendations from '../components/Recommendations'


export default function MovieDetail({reqActors, reqReviews, recommendations, tv, tv_id, food, pathto, reqImages }) {

    const [singleMovie, setSingleMovie] = useState([])
    const [videos, setVideos] = useState([])
    const [credits, setCredits] = useState([])

    const getMovie = () =>{
        axios.get(`https://api.themoviedb.org/3/movie/${tv_id}?api_key=${food}&language=en-US`).then((res) => {
            const moviesfetch = res.data
            setSingleMovie(moviesfetch)
        })
    }
    const getVideos = () =>{
        axios.get(`https://api.themoviedb.org/3/movie/${tv_id}/videos?api_key=${food}&language=en-US`).then((res) => {
            const videosfetch = res.data
            setVideos(videosfetch.results)
        })
    }
    const getCredits = () =>{
        axios.get(`https://api.themoviedb.org/3/movie/${tv_id}/credits?api_key=${food}&language=en-US`).then((res) => {
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

    const movieTime =  singleMovie?.runtime
    let time = Math.round(movieTime / 60)

    const mvg = singleMovie?.genres

   
    let getYoutube = videos.filter(function (el) {
        return el.type === 'Trailer'
    })
    let trailer = getYoutube[0]

   

  return (
    <div >
      <div className="w-full h-screen md:h-[650px] text-white">
    <div className='w-full h-full'>
        <div className="absolute w-full h-screen md:h-[650px] bg-gradient-to-t from-black via-gray-900"></div>
        <img className='w-full h-full ct-cover' src={`https://image.tmdb.org/t/p/original${singleMovie?.backdrop_path}`} alt={singleMovie?.title} />
        <div className='absolute top-[5%] md:top-[10%] p-5 m-5 flex flex-row flex-wrap sm:flex-nowrap'>
        <div>
        <div className='w-[280px] sm:w-[240px] lg:w-[280px] h-96 sm:h-96 inline-block cursor-pointer relative p-3 md:p-0'>
            <img className='w-auto h-full block bg-cover bg-center rounded-lg shadow-xl shadow-pink-900/20' src={`https://image.tmdb.org/t/p/w500${singleMovie?.poster_path && singleMovie?.poster_path}`} alt='single ' />
            <a target="_blank" href={`https://www.youtube.com/watch?v=${trailer?.key}`}><button className="border text-center inline-block md:my-4 w-[210px] md:w-[250px] p-2 my-6 md:px-4 rounded-md bg-gray-100 text-black font-semibold"><AiFillYoutube className='inline' /> Play Trailer</button></a>
        </div>
        </div>
            
        <div className='md:mx-20 md:px-10 md:my-0 my-10'>
        <h1 className='text-2xl md:text-5xl font-semibold '>{singleMovie?.title && singleMovie?.title}</h1>
            <div className='my-4'>
                <p className='text-gray-00 text-base'><span className='font-semibold text-white'>{mvg && mvg.map(genre => <div className='px-5 py-1 border border-white rounded-full my-1 mx-1 inline-block md:mx-2 hover:bg-gray-200 hover:text-black cursor-pointer'>{genre.name}</div>)}</span> <span className="text-xl font-bold p-2"> ~ </span> <br className=' sm:hidden' /><span className='font-semibold text-white md:text-xl'>{date}</span>  <span className="text-xl font-bold p-2"> ~ </span><span className='font-semibold text-white md:text-xl'>{time}h</span></p>
                
            </div>
            <p className="w-full text-gray-100 md:font-semibold text-sm py-2 md:text-xl">{singleMovie?.tagline && singleMovie?.tagline}</p>
            <p className="w-full text-gray-100 md:font-semibold text-sm py-2 md:text-xl">{singleMovie?.overview && singleMovie?.overview}</p>
            <div className="my-0">
            <button className='text-gray-100 md:my-6 '>Rating: <span className='text-5xl font-semibold'>{singleMovie?.vote_average && Math.round(singleMovie?.vote_average)}</span>/ 10 </button>
                <button className='text-gray-100 px-2 md:px-10 '>Votes: <span className='text-sm font-extrabold md:text-3xl'>{singleMovie?.vote_count && singleMovie?.vote_count }</span></button>
            </div>
            <div className='my-4 flex flex-row flex-wrap rounded-lg border-4'>
                <div className='text-white  py-2 mx-auto flex flex-col'>
                    <button className='px-10 md:text-2xl md:my-2'>Status</button>
                    <button className='font-semibold md:text-2xl md:my-2'>{singleMovie?.status && singleMovie?.status}</button>
                </div>
                <div className='text-white  py-2 mx-auto flex flex-col'>
                    <button className='px-10 md:text-2xl md:my-2'>Budget</button>
                    <button className='font-semibold md:text-2xl md:my-2'>${singleMovie?.budget && singleMovie?.budget }</button>
                </div>
                <div className='text-white  py-2 mx-auto flex flex-col'>
                    <button className='px-10 md:text-2xl md:my-2'>Revenue</button>
                    <button className='font-semibold md:text-2xl md:my-2'>${singleMovie?.revenue && singleMovie?.revenue}</button>
                </div>
                <div className='text-white  py-2 mx-auto flex flex-col'>
                    <button className='px-10 md:text-2xl md:my-2'>Website</button>
                    <a href={singleMovie?.homepage && singleMovie?.homepage}><button className='font-semibold text-sm md:text-xl md:my-2'>{singleMovie?.homepage && <div className='flex'><AiOutlineLink className='text-center text-2xl mx-20'/> </div> }</button></a>
                </div>
            </div>
        </div>
        </div>
    </div>
    </div>
        
    <div className={`w-screen md:w-full ${singleMovie.overview? 'mt-96' : 'mt-40'}  md:mt-40`}>
        <Tabs id="custom-animation" className='mt-20 md:mt-10' value="cast">
        <TabsHeader className='w-11/12 sm:w-2/3 mx-auto mt-2 md:mt-10'>
            
            <Tab value='cast' className='text-gray-900 font-bold py-2 md:text-xl md:py-2 m-1'>
                Cast
            </Tab>
            <Tab value='reviews' className='text-gray-900 font-bold py-2 md:text-xl md:py-2 m-1'>
            Reviews
            </Tab>
            <Tab value='backdrops' className='text-gray-900 font-bold py-2 md:text-xl md:py-2 m-1'>
                Backdrops
            </Tab>
            <Tab value='posters' className='text-gray-900 font-bold py-2 md:text-xl md:py-2 m-1'>
            Posters
            </Tab>
        </TabsHeader>
        <TabsBody
            animate={{
            mount: { y: 0 },
            unmount: { y: 250 },
            }}
        >
        
            <TabPanel value='cast' active>
                <div className='md:p-10 w-full'>
                     <Actors fetchUrl={reqActors} />
                </div>
           
            </TabPanel>
            <TabPanel value='reviews'>
            <div className='md:p-10 w-full'>
                <Reviews fetchUrl={reqReviews} tv={tv} />
            </div>
            </TabPanel>
            <TabPanel value='backdrops'>
                <Backdrops fetchUrl={reqImages} pathto={pathto} /> 
            </TabPanel>
            <TabPanel value='posters'>
                <Posters fetchUrl = {reqImages} pathto={pathto} />
            </TabPanel>

        </TabsBody>
        </Tabs>
      </div>

        <div>
            <h1 className="text-center font-extrabold text-3xl sm:text-4xl text-white sm:my-20 mt-20">Recommendations</h1>
             <Recommendations fetchUrl = {recommendations} pathto={pathto}/>
        </div>

    </div>
  )
}
