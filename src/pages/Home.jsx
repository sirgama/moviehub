import React from 'react'
import Major from '../components/Major'
import Row from '../components/Row'
import requests from '../Requests'

export default function Home() {
  return (
    <div>
      <Major />
      <Row title='Upcoming' fetchUrl={requests.requestUpcoming}/>
      <Row title='Popular' fetchUrl={requests.requestPopular}/>
      <Row title='Top Rated' fetchUrl={requests.requestTopRated}/>
      <Row title='Trending' fetchUrl={requests.requestTrending}/>
      <Row title='Horror' fetchUrl={requests.requestHorror}/>
    </div>
  )
}
