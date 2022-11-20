import React from 'react'
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

export default function Home() {

  
  const data = [
    {
      label: "HTML",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "React",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
  ];

  return (
    <div>
      <Major />
      <div>
      <Tabs id="custom-animation" value="movies">
      <TabsHeader className='w-5/6 md:w-1/2 mx-auto'>
        
          <Tab value='movies' className='text-gray-900 font-bold py-2 md:text-2xl md:py-3 m-1'>
            Movies
          </Tab>
          <Tab value='shows' className='text-gray-900 font-bold py-2 md:text-2xl md:py-3 m-1'>
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
