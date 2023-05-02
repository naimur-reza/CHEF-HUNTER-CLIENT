import React, { useEffect, useState } from "react";

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
            <div className="card   glass">
              <figure className="h-64 ">
                <img className="w-full h-full" src={chef.image} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{chef?.name}</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline btn-error">
                    View Recipes
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

export default Chef;
