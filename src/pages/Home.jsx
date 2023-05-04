import React from "react";
import chef from "../assets/images/chef.png";
import meal from "../assets/images/meal.png";
import pizza from "../assets/images/pizza.png";
import Chef from "./Chef";
import SummerPromo from "../components/SummerPromo";
import "../layout/Main.css";
import LazyLoad from "react-lazyload";
const Home = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center flex-col h-[100vh] banner2">
        <h1 className="lg:text-6xl text-4xl  text-white font-semibold font-mono text-center py-2">
          Welcome To <span className="text-yellow-500">CooksDen</span>
        </h1>
        <p className="text-center  text-sm py-5 text-gray-300 tracking-wide lg:text-xl px-8 lg:px-96 font-semibold">
          The culinary expert that your fine dining restaurant has been waiting
          for. Set the table for a successful online venture with ease!
        </p>
      </div>
      <div className=" bg-gray-200">
        <div className="my-container  lg:mt- p-5 flex items-center justify-between flex-col lg:flex-row ">
          <div className="py-10 space-y-4 max-w-xl ">
            <p className="text-info font-semibold">Our Story</p>
            <h1 className="text-5xl text-gray-700 font-bold">
              Traditional & Modern Service{" "}
              <span className="text-yellow-500">Since 1970</span>
            </h1>
            <p className="text-gray-600">
              Ut neque turpis dolor sit amet consectetur adipiscing elit purus
              egestas diam sit vitae egestas suspendisse amet ultricies eu. Eget
              at porttitor morbi blandit ac vitae, dolor. Gravida eu vel ac
              luctus. Hac a vel est malesuada tellus sed nunc, etiam maecenas.
            </p>
            <button className="btn btn-info btn-outline rounded-full ">
              Our Story
            </button>
          </div>
          <div className="relative">
            <LazyLoad offset={100} height={651}>
              <img src={chef} alt="" />
            </LazyLoad>
            <img className="absolute top-64 right-0" src={meal} alt="" />
            <img className="absolute top-64 left-0" src={pizza} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900">
        <Chef />
        <SummerPromo />
      </div>
    </div>
  );
};

export default Home;
