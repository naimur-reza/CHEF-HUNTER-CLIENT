import React from "react";
import { FaHistory, FaPizzaSlice, FaThumbsUp } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const Recipe = () => {
  const allData = useLoaderData();
  console.log(allData);
  const { name, bio, experience, image, recipes1, likes, recipes } =
    allData || {};
  return (
    <div className="my-container py-10">
      {/* chef details */}
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Movie" />
        </figure>
        <div className="card-body max-w-lg">
          <h2 className="card-title text-3xl text-warning font-bold">{name}</h2>
          <p className="tracking-wide text-gray-600">{bio}</p>
          <p className="inline-flex items-center gap-2">
            <span className="font-semibold text-gray-700 inline-flex items-center gap-1">
              <FaHistory /> Experience
            </span>
            : {experience} year
          </p>
          <p className="inline-flex items-center gap-2">
            {" "}
            <span className="font-semibold text-gray-700 inline-flex items-center gap-1">
              <FaPizzaSlice /> Recipes:
            </span>{" "}
            {recipes}
          </p>
          <p className="inline-flex gap-2 items-center">
            <span className="font-semibold text-gray-700 inline-flex items-center gap-2">
              <FaThumbsUp /> Likes:
            </span>
            {likes}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
