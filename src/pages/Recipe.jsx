import { Rating } from "@smastrom/react-rating";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import {
  FaHeart,
  FaHistory,
  FaPizzaSlice,
  FaStar,
  FaThumbsUp,
} from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const Recipe = () => {
  const [bookmark, isBookmark] = useState(false);
  const allData = useLoaderData();
  const handleBookmark = () => {
    toast.success("Added To Bookmark");
    isBookmark(true);
  };
  const { id, name, bio, experience, image, recipes1, likes, recipes } =
    allData || {};
  return (
    <div className="my-container py-10">
      {/* chef details */}
      <div className="card lg:h-80 lg:card-side bg-base-100 shadow-xl w-fit mx-auto ">
        <figure>
          <img className="h-full w-full" src={image} alt="Album" />
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
      <hr className="w-2/3 mt-20 border border-gray- mx-auto " />
      {/* recipe section */}
      <div className="py-14">
        <h1 className="text-center text-4xl  font-bold text-gray-100 py-5">
          Food Recipes
        </h1>
        {recipes1.map((rc) => {
          return (
            <div className="card lg:card-side  shadow-xl my-5  bg-white bg-opacity-10 backdrop-blur-md">
              <figure>
                <img
                  className="h-full w-full  mask mask-hexagon"
                  src={rc?.image}
                  alt="Album"
                />
              </figure>
              <div className="card-body max-w-3xl">
                <h2 className="card-title text-3xl text-gray-100">
                  {rc?.name}
                </h2>

                <h1></h1>

                <p>
                  <span className="font-bold text-gray-100">Ingredients: </span>
                  <span className="text-gray-300">{rc?.ingredients}</span>
                </p>
                <p>
                  <span className="font-bold text-gray-100">Instruction: </span>
                  <span className="text-gray-300">{rc?.instructions}</span>
                </p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleBookmark(id)}
                    className={`btn py-3  btn-warning rounded-full ${
                      bookmark && "btn-disabled"
                    }`}
                  >
                    <FaHeart /> Add To Favourite
                  </button>
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
