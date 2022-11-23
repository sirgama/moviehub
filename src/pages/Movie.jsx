import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { food } from '../openkey';
import MovieDetail from './MovieDetail';

export default function Movie() {
    const {movie_id} = useParams()
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const obj = {
        reqActors: `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${food}&language=en-US`,
        reqReviews: `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${food}&language=en-US`,
        recommendations: `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=${food}&language=en-US&page=1`,
        reqImages: `https://api.themoviedb.org/3/movie/${movie_id}/images?api_key=${food}&language=en-US`,
        tv: 'movie/',
        tv_id: movie_id,
        food: food,
        pathto: '/movie/'
    }

    console.log(movie_id)

  return (
    <div key={location.key}>
        <MovieDetail {...obj} />
    </div>
  )
}
