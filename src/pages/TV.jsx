import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import TvDetail from './TvDetail'
import { food } from '../openkey'

export default function TV() {
    const location = useLocation();
    const {tv_id} = useParams()
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const obj = {
        reqActors: `https://api.themoviedb.org/3/tv/${tv_id}/credits?api_key=${food}&language=en-US`,
        reqReviews: `https://api.themoviedb.org/3/tv/${tv_id}/reviews?api_key=${food}&language=en-US`,
        recommendations: `https://api.themoviedb.org/3/tv/${tv_id}/recommendations?api_key=${food}&language=en-US&page=1`,
        reqImages: `https://api.themoviedb.org/3/tv/${tv_id}/images?api_key=${food}&language=en-US`,
        tv: 'tv/',
        tv_id: tv_id,
        food: food,
        pathto: '/tv/show/'
    }
    console.log(obj.tv_id)

  return (
    <div key={location.key}>
        <TvDetail {...obj} />
    </div>
  )
}
