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
    <div>
      <h1>Meet Our Chef</h1>
    </div>
  );
};

export default Chef;
