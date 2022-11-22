import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProfileImage from '../assets/profile.png'

export default function Actors({fetchUrl}) {
   
    const [actors, setActors] = useState([])


    const getActors = () => {
        axios.get(fetchUrl).then((req) => {
            const mactors = req.data
            setActors(mactors.cast)
        })
    }

    useEffect(()=>{
        getActors()
    }, [])
console.log(actors)
  return (
    <div className='flex flex-row flex-wrap sm:w-5/6 justify-center mx-auto'>
        {actors.map((actor) => (
            <div className='w-[146px] h-[167px] sm:w-[166px] sm:h-[197px] p-4'>
                <img className='w-full h-full rounded-2xl object-cover m-4 ' src={actor?.profile_path ? `https://image.tmdb.org/t/p/w500${actor?.profile_path}` : `${ProfileImage}`} alt="" />
                <h3 className=' text-xs sm:text-sm font-medium text-white text-center'>{actor.name}</h3>
                <h3 className=''>{actor?.character} </h3>
            </div>
        ))}
    </div>
  )
}
