import React from 'react'
import Major from '../components/Major'
import Row from '../components/Row'
import requests from '../Requests'

export default function Home() {
  return (
    <div>
      <Major />
      <Row rowId='7' title='Currently on cinemas' fetchUrl={requests.requestNowplaying}/>
      <Row rowId='8' fetchUrl={requests.requestNowplaying2}/>
      <Row rowId='1' title='Upcoming' fetchUrl={requests.requestUpcoming}/>
      <Row rowId='9' title='' fetchUrl={requests.requestUpcoming2}/>
      <Row rowId='2' title='Popular' fetchUrl={requests.requestPopular}/>
      <Row rowId='3' title='Top Rated' fetchUrl={requests.requestTopRated}/>
      <Row rowId='4' title='Trending' fetchUrl={requests.requestTrending}/>
      
    </div>
  )
}
