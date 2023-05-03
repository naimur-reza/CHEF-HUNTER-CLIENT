import { Rating } from "@smastrom/react-rating";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import {
  FaHeart,
  FaHistory,
  FaPizzaSlice,
  FaStar,
  FaThumbsUp,
} from "react-icons/fa";
import {
  Navigate,
  ScrollRestoration,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import Loader from "./Loader";
import LazyLoad from "react-lazyload";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import ReactStars from "react-stars";

const Recipe = () => {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <Navigate to="/login" />;
  }
  const allData = useLoaderData();
  const navigate = useNavigation();
  if (navigate.state === "loading") {
    return <Navigate to={"/loader"}></Navigate>;
  }
  const [disId, setDisId] = useState("");
  const { id, name, bio, experience, image, recipes1, likes, recipes } =
    allData || {};

  const handleButton = (e) => {
    e.target.disabled = true;
    toast.success("Added to Bookmark");
  };
  return (
    <div className="my-container py-10 p-5">
      <ScrollRestoration />
      {/* chef details */}
      <div className="card lg:h-80 lg:card-side bg-base-100 backdrop-blur-sm bg-opacity-10 shadow-xl w-fit mx-auto ">
        <figure>
          <LazyLoad height={200}>
            <img className="h-full w-full" src={image} alt="Album" />
          </LazyLoad>
        </figure>
        <div className="card-body max-w-md   ">
          <h2 className="card-title text-3xl text-warning font-bold">{name}</h2>
          <p className="tracking-wide text-gray-100">{bio}</p>
          <p className="inline-flex items-center gap-2 text-gray-100">
            <span className="font-semibold text-gray-100 inline-flex items-center gap-1">
              <FaHistory className="text-green-400" /> Experience
            </span>
            : {experience} year
          </p>
          <p className="inline-flex items-center gap-2 text-gray-100">
            {" "}
            <span className="font-semibold text-gray-100 inline-flex items-center gap-1 t">
              <FaPizzaSlice className="text-pink-500" /> Recipes:
            </span>{" "}
            {recipes}
          </p>
          <p className="inline-flex gap-2 items-center text-gray-100">
            <span className="font-semibold text-gray-100 inline-flex items-center gap-2">
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
        {recipes1?.map((rc, idx) => {
          return (
            <div
              key={idx}
              className="card lg:card-side lg:h-[400px] p-7 shadow-xl my-5  bg-white bg-opacity-10 backdrop-blur-md"
            >
              <figure className="">
                <LazyLoad height={200}>
                  <img
                    className="lg:h-full mx-auto w-5/6 w  mask mask-hexagon"
                    src={rc?.image}
                    alt="Album"
                  />
                </LazyLoad>
              </figure>
              <div className="card-body max-w-3xl">
                <h2 className="card-title text-3xl text-gray-100">
                  {rc?.name}
                </h2>

                <h1>
                  <ReactStars
                    count={5}
                    value={rc?.rating}
                    size={24}
                    color2={"#ffd700"}
                    className="disabled"
                  />
                </h1>

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
                    onClick={handleButton}
                    id={idx}
                    className={`btn py-3  btn-warning rounded-full `}
                  >
                    <FaHeart className="text-pink-500" /> &nbsp; Add To
                    Favourite
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
