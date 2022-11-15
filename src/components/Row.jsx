import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../Requests'

export default function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([])

    const getMovies = () => {
        axios.get(fetchUrl).then((res) => {
            setMovies(res.data.results)
        })
    }
    useEffect(()=> getMovies(), [fetchUrl])
    console.log(movies)
  return (
    <div className='md:mt-8'>
      <h2 className="text-white font-bold md:text-xl p-4 ">{title}</h2>
      <div className="relative flex items-center">
        <div id={'slider'}>
            {movies.map((item, id) => (
                <div className='w-[160px] sm:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-3'>
                    <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`} alt={item.title} />
                    <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">

                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}
