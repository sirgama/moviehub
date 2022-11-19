import axios from 'axios'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import requests from '../Requests'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase/firebaseConfigs'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'


export default function Row({ title, fetchUrl, rowId }) {
    const [movies, setMovies] = useState([])
    const [saved, setSaved] = useState(false)
    const [likes, setLikes] = useState(false)
    const {user} = UserAuth()
    movies.map(item => item)
    const movieID = doc(db, 'users', `${user?.email}`)
    const saveShow = async () => {
        if(user?.email){
            setLikes(!likes)
            setSaved(true)
            await updateDoc(movieID, {
                savedShows : arrayUnion({
                    id: item.id,
                    title: item.title,
                    img: item.backdrop_path
                })
            })
        } else{
            console.log('please log in')
        }
    }


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
            <h2 className="text-gray-100 text-center font-bold text-xl md:text-4xl p-8 md:mx-20 my-6 md:my-10"> <span className='px-6 md:px-10 py-2 border-b-2 border-pink-500'>{title}</span></h2>
            <div className="relative flex items-center group ">
                <MdChevronLeft onClick={slideRight} className='bg-gray-200 left-0 rounded-full absolute opacity-40 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />
                <div id={'slider' + rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {movies.map((item, id) => (
                        <div key={item.id} className='w-[240px] sm:w-[240px] lg:w-[280px] h-96] p-6 md:p-6 inline-block cursor-pointer relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
                            <img className='w-auto h-full block bg-cover bg-center border-b-8 border-pink-500 rounded-lg shadow-3xl ' src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`} alt={item.title} />
                            {/* <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-80 text-white">
                                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center '>{item?.title}</p>
                                <p onClick={saveShow}>
                                    {likes ? <FaHeart className='absolute top-4 left-4 text-gray-400' /> : <FaRegHeart className='absolute top-4 left-4 text-gray-400' />}
                                </p>
                            </div> */}
                            <div className='whitespace-normal'>
                               <p className="text-white font-semibold my-2 text-sm">{item.title}</p> 
                               <p className="text-gray-400 font-semibold my-2 text-sm">{item.release_date}</p> 
                            </div>
                            
                        </div>
                    ))}
                </div>
                <MdChevronRight onClick={slideLeft} className='bg-gray-200 right-0 rounded-full absolute opacity-40 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />
            </div>
        </div>
    )
}
