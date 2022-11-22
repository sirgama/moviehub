import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Recommendations({fetchUrl}) {

    const [recommends, setRecommends] = useState([])

    const getRecommends = () => {
        axios.get(fetchUrl).then((req) => {
            const therecos = req.data.results
            console.log(therecos)
            setRecommends(therecos)
        })
    }
    useEffect(() => {
            getRecommends()
    }, [fetchUrl])

  return (
    <div>Recommendations</div>
  )
}
