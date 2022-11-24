import React, { useEffect, useState } from "react";
import { food } from "../openkey";
import { useLocation, useParams } from "react-router-dom";
import Filmography from "../components/Filmography";
import HashLoader from "react-spinners/HashLoader";
import axios from "axios";
import Navbar from "../components/Navbar";

export default function ActorDetail() {
  const [actor, setActor] = useState([]);
  const { actor_id } = useParams();
  const location = useLocation();
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const obj = {
    reqActor: `https://api.themoviedb.org/3/person/${actor_id}?api_key=${food}&language=en-US`,
    reqFilms: `https://api.themoviedb.org/3/person/${actor_id}/combined_credits?api_key=${food}&language=en-US`,
    tv: "/tv/show/",
    movie: "/movie/",
  };

  const getActor = () => {
    axios.get(obj.reqActor).then((res) => {
      const actorfetch = res.data;
      setActor(actorfetch);
      setTimeout(() => {
        setLoading(false);
      }, 2500);
    });
  };
  useEffect(() => {
    getActor();
  }, [obj.reqActor]);

  return (
    <div key={location.key}>
      {loading ? (
        <div className="flex flex-col items-center justify-center justify-items-center my-96">
          <HashLoader color="#fefefe" size={100} />
        </div>
      ) : (
        <>
          <Navbar />
          <div className="w-full h-screen">
            <div className="flex flex-row flex-wrap">
              <div className="w-[220px] sm:w-[290px]  h-auto sm:h-auto inline-block cursor-pointer relative mb-6 p-3 sm:p-0 mt-10 ml-10  sm:mt-32 sm:ml-14 sm:mr-4">
                <img
                  className="w-auto h-full block bg-cover bg-center rounded-lg"
                  src={`https://image.tmdb.org/t/p/w500${
                    actor?.profile_path && actor?.profile_path
                  }`}
                  alt={actor?.name}
                />
              </div>
              <div className="text-white flex flex-col p-3 sm:p-0 mt-1 mx-1  sm:mt-32 sm:mx-1">
                <h1 className="font-bold underline underline-offset-8 sm:no-underline text-center md:text-start text-4xl mb-10 sm:ml-20">
                  {actor?.name}
                </h1>
                <div className="flex flex-row flex-wrap">
                  <div className="flex flex-col m-4 sm:ml-20">
                    <h1 className="font-bold sm:text-xl my-4">Gender</h1>
                    <h1 className="">
                      {actor?.gender === 1 ? "Female" : "Male"}
                    </h1>
                    <h1 className="font-bold sm:text-xl my-4">Known for</h1>
                    <h1 className="">{actor?.known_for_department}</h1>
                  </div>
                  <div className="flex flex-col m-4">
                    <h1 className="font-bold sm:text-xl my-4">Born in</h1>
                    <h1 className="">{actor?.place_of_birth}</h1>
                    <h1 className="font-bold sm:text-xl my-4">Website</h1>
                    <h1 className="">{actor?.homepage}</h1>
                  </div>
                  <div className="flex flex-col m-4">
                    <h1 className="font-bold sm:text-xl my-4">Birthday</h1>
                    <h1 className="">{actor?.birthday}</h1>
                  </div>
                </div>
              </div>
              <div className="text-white flex flex-col mx-6 sm:mx-14">
                <h1 className="font-bold text-2xl my-4">Biography</h1>
                <p className="sm:text-xl">{actor?.biography}.</p>
              </div>
            </div>

            <h1 className="text-center font-extrabold text-3xl sm:text-4xl text-white sm:my-20 mt-20">
              Filmography
            </h1>
            <Filmography
              fetchUrl={obj.reqFilms}
              movie={obj.movie}
              tv={obj.tv}
            />
          </div>
        </>
      )}
    </div>
  );
}
