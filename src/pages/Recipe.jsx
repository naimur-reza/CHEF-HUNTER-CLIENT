import React from "react";
import { FaHistory, FaPizzaSlice, FaStar, FaThumbsUp } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const Recipe = () => {
  const allData = useLoaderData();
  console.log(allData);
  const { name, bio, experience, image, recipes1, likes, recipes } =
    allData || {};
  return (
    <div className="my-container py-10">
      {/* chef details */}
      <div className="card h-72 w-fit mx-auto  card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-full" src={image} alt="Movie" />
        </figure>
        <div className="card-body max-w-md">
          <h2 className="card-title text-3xl text-warning font-bold">{name}</h2>
          <p className="tracking-wide text-gray-600">{bio}</p>
          <p className="inline-flex items-center gap-2">
            <span className="font-semibold text-gray-700 inline-flex items-center gap-1">
              <FaHistory className="text-green-400" /> Experience
            </span>
            : {experience} year
          </p>
          <p className="inline-flex items-center gap-2">
            {" "}
            <span className="font-semibold text-gray-700 inline-flex items-center gap-1 t">
              <FaPizzaSlice className="text-pink-500" /> Recipes:
            </span>{" "}
            {recipes}
          </p>
          <p className="inline-flex gap-2 items-center">
            <span className="font-semibold text-gray-700 inline-flex items-center gap-2">
              <FaThumbsUp className="text-sky-500" /> Likes:
            </span>
            {likes}
          </p>
        </div>
      </div>
      {/* recipe section */}
      <div className="py-14">
        <h1 className="text-center text-4xl  font-semibold">Food Recipes</h1>
        {recipes1.map((rc) => {
          return (
            <div className="card lg:card-side bg-base-100 shadow-xl my-5">
              <figure>
                <img className="h-full w-full " src={rc?.image} alt="Album" />
              </figure>
              <div className="card-body max-w-3xl">
                <h2 className="card-title text-3xl">{rc?.name}</h2>
                <p className="inline-flex items-center gap-1">
                  <FaStar className="text-yellow-400" width={33} height={33} />{" "}
                  {rc?.rating}
                </p>
                <p>
                  <span className="font-semibold">Ingredients: </span>
                  <span className="text-gray-500">{rc?.ingredients}</span>
                </p>
                <p>
                  <span className="font-semibold">Instruction: </span>
                  <span className="text-gray-500">{rc?.instructions}</span>
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Listen</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recipe;
