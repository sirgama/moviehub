import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileImage from "../assets/profile.png";

export default function Actors({ fetchUrl }) {
  const [actors, setActors] = useState([]);

  const getActors = () => {
    axios.get(fetchUrl).then((req) => {
      const mactors = req.data;
      setActors(mactors.cast);
    });
  };

  useEffect(() => {
    getActors();
  }, []);
  return (
    <div className="flex flex-row flex-wrap w-full sm:w-5/6 justify-center mx-auto">
      {actors.map((actor) => (
        <div key={actor.id}>
          <Link to={`/actor/${actor.id}`}>
            <div className="w-[156px] h-[187px] sm:w-[186px] sm:h-[207px] p-6 mt-10 ">
              <img
                className="w-full h-full rounded-2xl object-cover m-2 relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                src={
                  actor?.profile_path
                    ? `https://image.tmdb.org/t/p/w500${actor?.profile_path}`
                    : `${ProfileImage}`
                }
                alt=""
              />
              <h3 className=" text-xs sm:text-sm font-medium text-white text-center">
                {actor.name}
              </h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
