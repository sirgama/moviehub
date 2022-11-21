import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { food } from '../openkey'
import {useParams} from "react-router-dom"
import Datecalc from '../components/Datecalc'
import {AiFillYoutube, AiOutlineLink} from 'react-icons/ai'

export default function TvDetail(props) {

    const [tvShow, setTvShow] = useState([])
    const [videos, setVideos] = useState([])
    const [credits, setCredits] = useState([])
    const {tv_id} = useParams()

    const getTv = () => {
        axios.get(`https://api.themoviedb.org/3/tv/${tv_id}?api_key=${food}&language=en-US`).then((res) => {
            const tvfetch = res.data
            setTvShow(tvfetch)
        })
    }

    const getVideos = () => {
        axios.get(`https://api.themoviedb.org/3/tv/${tv_id}/videos?api_key=${food}&language=en-US`).then((res) => {
            const videosfetch = res.data
            setVideos(videosfetch.results)
        })
    }

    const getCredits = () =>{
        axios.get(`https://api.themoviedb.org/3/tv/${tv_id}/credits?api_key=${food}&language=en-US`).then((res) => {
            const creditsfetch = res.data
            setCredits(creditsfetch)
        })
    }
 
    useEffect(()=> {
        getTv()
     }, [])
     useEffect(()=> {
         getVideos()
      }, [])
 
      useEffect(()=> {
         getCredits()
      }, [])

      const tvdate = tvShow?.first_air_date
      let yr = new Date(tvdate)
      let date = Datecalc(yr)
      console.log(tvShow)

  return (
    <div>TvDetail</div>
  )
}
