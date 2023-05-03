import React, { useEffect, useState } from "react";
import { FaHistory, FaPizzaSlice, FaThumbsUp } from "react-icons/fa";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

const Chef = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("https://cookdens-server-naimur-reza.vercel.app/chef")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);
  console.log(chefs);
  return (
    <div className="py-10 my-container gap-4">
      <h1 className="text-4xl text-gray-100 font-semibold text-center">
        Meet Our Chef
      </h1>

      <div className="grid lg:grid-cols-3 p-5 grid-cols-1 gap-5 pt-10">
        {chefs.map((chef) => {
          return (
            <div className="card    glass">
              <figure className=" ">
                <LazyLoad once>
                  <img className="w-full h-full" src={chef.image} />
                </LazyLoad>
              </figure>
              <div className="card-body">
                <h2 className="card-title text-gray-100">{chef?.name}</h2>
                <p className="inline-flex items-center gap-2 text-gray-100">
                  <span className="font-semibold text-gray-100 inline-flex items-center gap-1">
                    <FaHistory className="text-green-500" /> Experience
                  </span>
                  : {chef?.experience} year
                </p>
                <p className="inline-flex items-center gap-2 text-gray-100">
                  {" "}
                  <span className="font-semibold  text-gray-100 inline-flex items-center gap-1">
                    <FaPizzaSlice className="text-orange-500" /> Recipes:
                  </span>{" "}
                  {chef?.recipes}
                </p>
                <p className="inline-flex gap-2 items-center text-gray-100">
                  <span className="font-semibold text-gray-100 inline-flex items-center gap-2">
                    <FaThumbsUp className="text-sky-500" /> Likes:
                  </span>
                  {chef?.likes}
                </p>
                <div className="card-actions justify-end">
                  <Link
                    to={`/recipe/${chef?.id}`}
                    className="btn btn-outline btn-error"
                  >
                    View Recipes
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Chef;
