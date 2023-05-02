import React, { useEffect, useState } from "react";
import { FaHistory, FaPizzaSlice, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Chef = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chef")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);
  console.log(chefs);
  return (
    <div className="py-10 my-container gap-4">
      <h1 className="text-3xl font-semibold text-center">Meet Our Chef</h1>
      <div className="grid grid-cols-3 gap-5 pt-10">
        {chefs.map((chef) => {
          return (
            <div className="card    glass">
              <figure className="h-64 ">
                <img className="w-full h-full" src={chef.image} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{chef?.name}</h2>
                <p className="inline-flex items-center gap-2">
                  <span className="font-semibold text-gray-700 inline-flex items-center gap-1">
                    <FaHistory /> Experience
                  </span>
                  : {chef?.experience} year
                </p>
                <p className="inline-flex items-center gap-2">
                  {" "}
                  <span className="font-semibold text-gray-700 inline-flex items-center gap-1">
                    <FaPizzaSlice /> Recipes:
                  </span>{" "}
                  {chef?.recipes}
                </p>
                <p className="inline-flex gap-2 items-center">
                  <span className="font-semibold text-gray-700 inline-flex items-center gap-2">
                    <FaThumbsUp /> Likes:
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
