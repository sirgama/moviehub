import React, { useEffect, useState } from 'react'
import { food } from '../openkey'
import { useLocation, useParams } from 'react-router-dom';
import Filmography from '../components/Filmography';

export default function ActorDetail() {

    const {actor_id} = useParams()
    let [loading, setLoading] = useState(true);
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const obj = {
        reqActor: `https://api.themoviedb.org/3/person/${actor_id}/?api_key=${food}&language=en-US`,
        reqFilms: `https://api.themoviedb.org/3/person/${actor_id}/combined_credits?api_key=${food}&language=en-US`,
        tv: '/tv/show/',
        movie: '/movie/',
    }
  return (
    <div>
        <div className="w-full h-screen">
            <div className="flex flex-row flex-wrap">
                <div className="w-[280px]  h-96 sm:h-96 inline-block cursor-pointer relative p-3 sm:p-0 mt-10 mx-10  sm:mt-32 sm:mx-20">
                    <img className='w-auto h-full block bg-cover bg-center rounded-lg' src="https://image.tmdb.org/t/p/w500/AlhEFI2E7t56hIc2d8eArm7bgmT.jpg" alt="" />
                </div>
                <div className="text-white flex flex-col p-3 sm:p-0 mt-10 mx-1  sm:mt-32 sm:mx-1">
                        <h1 className="font-bold">Zendaya</h1>
                        <div className="flex flex-row flex-wrap">
                                <div className="flex flex-col">
                                    <h1 className="font-bold">Gender</h1>
                                    <h1 className="font-bold">Gender</h1>
                                    <h1 className="font-bold">Gender</h1>
                                    <h1 className="font-bold">Gender</h1>
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="font-bold">Gender</h1>
                                    <h1 className="font-bold">Gender</h1>
                                    <h1 className="font-bold">Gender</h1>
                                    <h1 className="font-bold">Gender</h1>
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="font-bold">Gender</h1>
                                    <h1 className="font-bold">Gender</h1>
                                </div>
                        </div>
                </div>
                <div className="text-white flex flex-col">
                    <h1 className="font-bold">Bigraphy</h1>
                    <p>Zendaya Maree Stoermer Coleman (born September 1, 1996) is an American actress and singer. She began her career as a child model and backup dancer. She rose to mainstream prominence for her role as Rocky Blue on the Disney Channel sitcom Shake It Up (2010–2013). In 2013, Zendaya was a contestant on the 16th season of the dance competition series Dancing with the Stars. She produced and starred as the titular spy, K.C. Cooper, in the sitcom K.C. Undercover (2015–2018). Her film roles include the musical drama The Greatest Showman (2017), the superhero film Spider-Man: Homecoming (2017) and its sequels, the computer-animated musical comedy Smallfoot (2018), the romantic drama Malcolm & Marie (2021), the live-action/animation hybrid sports comedy Space Jam: A New Legacy (2021), and the science fiction epic Dune (2021).</p>
                </div>
            </div>

            <h1 className="text-center font-extrabold text-3xl sm:text-4xl text-white sm:my-20 mt-20">Filmography</h1>
                <Filmography fetchUrl = {obj.reqFilms} movie={obj.movie} tv={obj.tv}/>
        </div>
    </div>
  )
}
