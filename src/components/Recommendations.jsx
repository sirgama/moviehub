import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Recommendations({ fetchUrl, pathto }) {
  const [recommends, setRecommends] = useState([]);

  const getRecommends = () => {
    axios.get(fetchUrl).then((req) => {
      const therecos = req.data.results;
      setRecommends(therecos);
    });
  };

  useEffect(() => {
    getRecommends();
  }, [fetchUrl]);

  return (
    <div className="flex flex-row flex-wrap sm:w-5/6 justify-center mx-auto mt-10">
      {recommends.map((item) => (
        <div key={item.id}>
          <Link to={`${pathto}${item.id}`}>
            <div className="w-[336px] h-[227px] md:w-[386px] md:h-[257px] p-6  ">
              <img
                className="w-full h-full rounded-2xl object-cover m-2 relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                src={
                  item?.backdrop_path &&
                  `https://image.tmdb.org/t/p/original${item?.backdrop_path}`
                }
                alt=""
              />
              <h3 className=" text-base sm:text-base font-medium text-white text-center">
                {item.name ? item.name : item.title}
              </h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
