import React from "react";
import LazyLoad from "react-lazyload";
import summer1 from "../assets/images/summer1.jpg";
import summer2 from "../assets/images/summer2.jpg";
const SummerPromo = () => {
  return (
    <div className="my-container py-14">
      <h1 className="text-center lg:text-5xl text-3xl text-gray-100  lg:px-64 px-14 tracking-wide font-semibold">
        Check Our All Flavours Summer Promo
      </h1>
      <div className="flex justify-between items-center flex-col lg:flex-row py-10">
        <LazyLoad height={300}>
          <img className="lg:h-96 rounded-md" src={summer1} alt="" />
        </LazyLoad>
        <div className="space-y-3 py-5 max-w-lg p-5">
          <h1 className="text-4xl font-semibold text-gray-100">
            {" "}
            Over <span className="text-yellow-500">250</span> Delicious & Tasty
            Recipes
          </h1>
          <p className="text-yellow-500 text-xl font-semibold animate-pulse">
            Get 25% Off
          </p>
          <p className="text-gray-200 tracking-wide">
            The recipes in this cookbook are easy to follow, with clear
            instructions and ingredients that are readily available in most
            grocery stores. Whether you're an experienced cook or just starting
            out, you'll find something new and exciting to try in this book.
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center flex-col lg:flex-row-reverse py-10">
        <LazyLoad height={384}>
          <img className="lg:h-96 rounded-md" src={summer2} alt="" />
        </LazyLoad>
        <div className="space-y-3 py-5 max-w-lg p-5">
          <h1 className="text-4xl font-semibold text-gray-100 ">
            {" "}
            Healthy and Flavorful: <span className="text-yellow-500">
              300
            </span>{" "}
            Nutritious and Delicious Recipes Over{" "}
          </h1>
          <p className="text-yellow-500 text-xl font-semibold animate-pulse">
            Get 49% Off
          </p>
          <p className="text-gray-200 tracking-wide ">
            The appetizers section features a variety of dips, spreads, and
            finger foods that are perfect for entertaining or snacking. From
            classic favorites like guacamole and spinach dip to more unique
            offerings like pomegranate salsa and stuffed mushrooms, these
            appetizers are sure to impress.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SummerPromo;
