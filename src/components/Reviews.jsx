import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Reviews({fetchUrl, pathto}) {
    const [reviews, setReviews] = useState([])

    const getReviews = () => {
        axios.get(fetchUrl).then((res) => {
            const freviews = res.data.results
            setReviews(freviews)
        })
    }
  return (
    <div>Reviews</div>
  )
}
