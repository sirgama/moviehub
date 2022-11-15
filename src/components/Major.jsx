import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../Requests'

export default function Major() {
    const [movies, setMovies] = useState([])

    const  singleMovie = movies[Math.floor(Math.random() * movies.length)]
    const getMovies = () =>{
        axios.get(requests.requestPopular).then((res) => {

            const moviesfetch = res.data
            setMovies(moviesfetch.results)
        })
    }
    useEffect(()=> getMovies(), [])
    console.log(singleMovie.overview)
  return (
    <div>Major</div>
  )
}
