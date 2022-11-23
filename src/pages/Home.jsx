import React, { useEffect, useState } from 'react'
import Major from '../components/Major'
import Row from '../components/Row'
import TvRow from '../components/TvRow'
import requests from '../Requests'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Navbar from '../components/Navbar'
import axios from 'axios'
import  HashLoader from "react-spinners/HashLoader";

export default function Home() {
  const [movies, setMovies] = useState([])
  let [loading, setLoading] = useState(true);

    
  const getMovies = () =>{
      axios.get(requests.requestPopular).then((res) => {

          const moviesfetch = res.data
          setMovies(moviesfetch.results)
          setTimeout(() => {
            setLoading(false)
          }, 2500)
        
      })
  }

  useEffect(()=> {
     getMovies()
  }, [])



  return (
    <div>

{loading ? 
        <div className="flex flex-col items-center justify-center justify-items-center my-96">
            <HashLoader
                color="#fefefe"
                size={100}
                />
        </div>
             
        :
        <>
            <Navbar />
          <Major movies={movies}/>
          <div>
          <Tabs id="custom-animation" value="movies">
          <TabsHeader className='w-5/6 md:w-1/3 mx-auto'>
            
              <Tab value='movies' className='text-gray-900 font-bold py-2 md:text-xl md:py-2 m-1'>
                Movies
              </Tab>
              <Tab value='shows' className='text-gray-900 font-bold py-2 md:text-xl md:py-2 m-1'>
              TV Shows
              </Tab>
          </TabsHeader>
          <TabsBody
            animate={{
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
          
              <TabPanel value='movies' active>
              <Row rowId='7' title='Currently on cinemas' fetchUrl={requests.requestNowplaying}/>
            <Row rowId='8'  title='Now showing' fetchUrl={requests.requestNowplaying2}/>
            <Row rowId='1' title='Upcoming' fetchUrl={requests.requestUpcoming}/>
            <Row rowId='9' title='More upcoming movies' fetchUrl={requests.requestUpcoming2}/>
            <Row rowId='2' title='Whats Popular' fetchUrl={requests.requestPopular}/>
            <Row rowId='3' title='Top Rated' fetchUrl={requests.requestTopRated}/>
            <Row rowId='4' title='Trending Today' fetchUrl={requests.requestTrending}/>
              </TabPanel>
              <TabPanel value='shows'>
            <TvRow rowId='11' title='On Tv Today' fetchUrl={requests.tvToday}/>
            <TvRow rowId='12' title='ON AIR' fetchUrl={requests.tvOnair}/>
            <TvRow rowId='13' title='Popular TV Shows' fetchUrl={requests.tvPopular}/>
            <TvRow rowId='14' title='Top Rated Shows' fetchUrl={requests.tvToprated}/>
              </TabPanel>

          </TabsBody>
        </Tabs>
          </div>
        </>
}
      
    


      {/* <Row rowId='7' title='Currently on cinemas' fetchUrl={requests.requestNowplaying}/>
      <Row rowId='8'  title='Now showing' fetchUrl={requests.requestNowplaying2}/>
      <Row rowId='1' title='Upcoming' fetchUrl={requests.requestUpcoming}/>
      <Row rowId='9' title='More upcoming movies' fetchUrl={requests.requestUpcoming2}/>
      <Row rowId='2' title='Whats Popular' fetchUrl={requests.requestPopular}/>
      <Row rowId='3' title='Top Rated' fetchUrl={requests.requestTopRated}/>
      <Row rowId='4' title='Trending Today' fetchUrl={requests.requestTrending}/> */}

    </div>
  )
}
