import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Posters({fetchUrl, pathto}) {
    const [posters, setposters] = useState([])

    const getposters = () => {
        axios.get(fetchUrl).then((req) => {
            const thebacks = req.data.posters
            setposters(thebacks)
        })  
    }

    useEffect(() => {
        getposters()
    }, [fetchUrl])
  return (
    <div className='flex flex-row flex-wrap sm:w-5/6 justify-center mx-auto mt-10'>
    {posters.map((item) => (
        <Link to={`${pathto}${item.id}`} relative="path"><div key={item.id} className='w-[336px] h-[227px] md:w-[386px] md:h-[257px] p-6  '>
            <img className='w-full h-full rounded-2xl object-cover m-2 relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' src={item?.backdrop_path && `https://image.tmdb.org/t/p/original${item?.backdrop_path}` } alt="" />
            
        </div>
        </Link>
    ))}
</div>
  )
}
