import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Backdrops({fetchUrl, pathto}) {

    const [backdrops, setBackdrops] = useState([])

    const getBackdrops = () => {
        axios.get(fetchUrl).then((req) => {
            const thebacks = req.data.backdrops
            setBackdrops(thebacks)
        })  
    }

    useEffect(() => {
        getBackdrops()
    }, [fetchUrl])


  return (
    <div>Backdrops</div>
  )
}
