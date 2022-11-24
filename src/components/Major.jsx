import React from "react";
import { Link } from "react-router-dom";

export default function Major({ movies }) {
  let singleMovie = movies[Math.floor(Math.random() * movies.length)];
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-screen md:h-[650px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-screen md:h-[650px] bg-gradient-to-t from-black  "></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original${singleMovie?.backdrop_path}`}
          alt={singleMovie?.title}
        />
        <div className="absolute top-[40%]  md:top-[30%] md:left-[20%] p-2 m-5 flex flex-row flex-wrap sm:flex-nowrap justify-center items-center">
          <div className="md:mx-20 md:px-20">
            <form action="">
              <input
                className="bg-transparent border-b-4 border-pink-700 placeholder:text-white placeholder:text-md  md:w-[600px] py-2 focus:outline-none block w-[300px]"
                type="text"
                name=""
                id=""
                placeholder="Search for a movie or TV show"
              />
            </form>

            <div className="my-4">
              <p className="text-sm md:text-sm font-semibold ">
                <span className="text-gray-400">Background image movie: </span>
                <Link className="underline" to={`/movie/${singleMovie?.id}`}>
                  {singleMovie?.title && singleMovie?.title}
                </Link>{" "}
              </p>
            </div>

            <p className="text-gray-400 text-sm">
              Release date:{" "}
              <span className="font-bold text-white">
                {singleMovie?.release_date && singleMovie?.release_date}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
