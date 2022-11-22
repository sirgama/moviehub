import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { food } from '../openkey'
import {useParams} from "react-router-dom"
import Datecalc from '../components/Datecalc'
import {AiFillYoutube, AiOutlineLink} from 'react-icons/ai'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
import Actors from '../components/Actors'

export default function TvDetail(props) {

    const [tvShow, setTvShow] = useState([])
    const [credits, setCredits] = useState([])
    const {tv_id} = useParams()

    const getTv = () => {
        axios.get(`https://api.themoviedb.org/3/tv/${tv_id}?api_key=${food}&language=en-US`).then((res) => {
            const tvfetch = res.data
            setTvShow(tvfetch)
        })
    }

  

    const getCredits = () =>{
        axios.get(`https://api.themoviedb.org/3/tv/${tv_id}/credits?api_key=${food}&language=en-US`).then((res) => {
            const creditsfetch = res.data.cast
            setCredits(creditsfetch)
        })
    }
 
    const reqActors = `https://api.themoviedb.org/3/tv/${tv_id}/credits?api_key=${food}&language=en-US`
    
    useEffect(()=> {
        getTv()
     }, [])
 
      useEffect(()=> {
         getCredits()
      }, [])

      const tvdate = tvShow?.first_air_date
      let yr = new Date(tvdate)
      let date = Datecalc(yr)
      
      const overview = tvShow?.overview
      const mvg = tvShow?.genres
      const time = tvShow?.episode_run_time

  return (
    <div>
         <div className="w-full h-screen md:h-[650px] text-white">
        <div className='w-full h-full'>
        <div className="absolute w-full h-screen md:h-[650px] bg-gradient-to-t from-black via-gray-900"></div>
        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original${tvShow?.backdrop_path}`} alt={tvShow?.name} />
        <div className='absolute top-[5%] md:top-[10%] p-5 m-5 flex flex-row flex-wrap sm:flex-nowrap'>
        <div>
        <div className='w-[280px] sm:w-[240px] lg:w-[280px] h-80 sm:h-96 inline-block cursor-pointer relative p-3 md:p-0'>
            <img className='w-auto h-full block bg-cover bg-center rounded-lg shadow-xl shadow-pink-900/20' src={`https://image.tmdb.org/t/p/w500${tvShow?.poster_path && tvShow?.poster_path}`} alt='single ' />
            
        </div>
        </div>
            
        <div className='md:mx-20 md:px-10 md:my-0 mt-10'>
        <h1 className='text-2xl md:text-5xl font-semibold '>{tvShow?.name && tvShow?.name}</h1>
            <div className='my-4'>
                <p className='text-gray-00 text-base'><span className='font-semibold text-white'>{mvg && mvg.map(genre => <div className='px-1 md:px-5 py-1 border-2 border-white rounded-full my-1 mx-1 inline-block md:mx-2 hover:bg-gray-200 hover:text-black cursor-pointer text-xs md:text-xl'>{genre.name}</div>)}</span> <span className="text-sm md:text-xl font-bold p-2"> ~ </span> <br className=' sm:hidden' /><span className='font-semibold text-white md:text-xl text-xs'>{date}</span>  <span className="text-xl font-bold p-2"> ~ </span><span className='font-semibold text-white md:text-xl text-xs'>{time && `${time} Mins` }</span></p>
                
            </div>
            <p className="w-full text-gray-100 md:font-semibold text-sm py-2 md:text-xl">{tvShow?.tagline && tvShow?.tagline}</p>
            <p className="w-full text-gray-100 md:font-semibold text-sm py-2 md:text-xl">{tvShow?.overview && tvShow?.overview}</p>
            <div className="my-0">
            <button className='text-gray-100 md:my-6 '>Rating: <span className='text-3xl md:text-5xl md:px-2 font-semibold'>{tvShow?.vote_average && Math.round(tvShow?.vote_average)}</span>/ 10 </button>
                <button className='text-gray-100 px-2 md:px-10 '>Votes: <span className='text-sm md:px-2 font-extrabold md:text-3xl'>{tvShow?.vote_count && tvShow?.vote_count }</span></button>
            </div>
            <div className='my-4 flex flex-row flex-wrap rounded-lg border-4 items-center'>
                <div className='text-white  py-2 mx-auto flex flex-col'>
                    <button className='px-10 md:text-2xl md:my-2'>Status</button>
                    <button className='font-semibold text-sm md:text-xl md:px-4 md:my-2'>{tvShow?.status && tvShow?.status}</button>
                </div>
                <div className='text-white  py-2 mx-auto flex flex-col'>
                    <button className='px-10 md:text-2xl md:my-2'>Seasons</button>
                    <button className='font-semibold text-sm md:text-xl md:my-2'>{tvShow?.seasons && tvShow?.number_of_seasons }</button>
                </div>
                <div className='text-white  py-2 mx-auto flex flex-col'>
                    <button className='md:px-10 md:text-2xl md:my-2'>Episodes</button>
                    <button className='font-semibold text-sm md:text-xl md:my-2'>{tvShow?.type && tvShow?.number_of_episodes}</button>
                </div>
                <div className='text-white hidden py-2 mx-auto md:flex flex-col'>
                    <button className='md:px-10 md:text-2xl md:my-2'>Website</button>
                    <a href={tvShow?.homepage && tvShow?.homepage}><button className='font-semibold text-sm md:text-xl md:my-2'>{tvShow?.homepage && <div className=''><AiOutlineLink className='text-center text-sm md:text-2xl mx-20'/> </div> }</button></a>
                </div>
            </div>
        </div>
        </div>
    </div>
        </div>

        <div className={`w-screen md:w-full ${overview? 'mt-96' : 'mt-40'}  md:mt-40`}>
        <Tabs id="custom-animation" className='mt-20 md:mt-10' value="cast">
        <TabsHeader className='w-11/12 md:w-1/3 mx-auto mt-2 md:mt-0'>
            
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
            <Actors fetchUrl={reqActors} />
            </TabPanel>
            <TabPanel value='reviews'>
            
            </TabPanel>
            <TabPanel value='backdrops'>
            
            </TabPanel>
            <TabPanel value='posters'>
            
            </TabPanel>

        </TabsBody>
        </Tabs>
      </div>

    </div>
  )
}
