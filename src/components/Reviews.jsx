import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProfileImage from '../assets/profile.png'

export default function Reviews({fetchUrl, pathto}) {
    const [reviews, setReviews] = useState([])

    const getReviews = () => {
        axios.get(fetchUrl).then((res) => {
            const freviews = res.data.results
            setReviews(freviews)
        })
    }

    useEffect(() => {
        getReviews()
    }, [fetchUrl])
    console.log(reviews)
  return (
    <div className='flex flex-col flex-wrap sm:w-5/6 justify-center mx-auto'>
        {reviews? reviews.map((item) => (
            <>
            <hr  className='text-white' />
            <div key={item.id} className='w-auto h-auto  p-6 flex flex-row items-center'>
                
                <img className='w-[50px] h-[50px] rounded-full object-cover m-2 relative ' src={item?.author_details.avatar_path
 ? `https://image.tmdb.org/t/p/original${item?.author_details.avatar_path}` : `${ProfileImage}` } alt="" />
                <h3 className=' text-sm sm:text-base font-medium px-6 text-white text-center'>{item.author}</h3>
                
            </div>
            <div className="flex flex-row w-auto h-auto  mx-6 mb-2 ">
                <h3 className="text-white">{item.content}</h3>
            </div>
            </>
        )) : <h3 className='text-white text-2xl'>There are no reviews at the moment</h3>}
    </div>
  )
}
