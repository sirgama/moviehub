import axios from 'axios'
import React, { useEffect, useState } from 'react'

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
    <div>Actors</div>
  )
}
