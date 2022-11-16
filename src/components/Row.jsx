import axios from 'axios'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import requests from '../Requests'

export default function Row({ title, fetchUrl, rowId }) {
    const [movies, setMovies] = useState([])
    const [likes, setLikes] = useState(false)
    let slider = document.getElementById('slider' + rowId)
    const slideLeft = () => {
        slider.scrollLeft = slider.scrollLeft + 500
    }

    const slideRight = () => {
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const getMovies = () => {
        axios.get(fetchUrl).then((res) => {
            setMovies(res.data.results)
        })
    }
    useEffect(() => getMovies(), [fetchUrl])
    console.log(movies)
    return (
        <div className='md:mt-8'>
            <h2 className="text-white font-bold md:text-xl p-4 ">{title}</h2>
            <div className="relative flex items-center group">
                <MdChevronLeft onClick={slideRight} className='bg-gray-200 left-0 rounded-full absolute opacity-40 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />
                <div id={'slider' + rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {movies.map((item, id) => (
                        <div key={item.id} className='w-[160px] sm:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-3'>
                            <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`} alt={item.title} />
                            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-80 text-white">
                                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center '>{item?.title}</p>
                                <p>
                                    {likes ? <FaHeart className='absolute top-4 left-4 text-gray-400' /> : <FaRegHeart className='absolute top-4 left-4 text-gray-400' />}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <MdChevronRight onClick={slideLeft} className='bg-gray-200 right-0 rounded-full absolute opacity-40 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />
            </div>
        </div>
    )
}