import React from "react";
import error from "../assets/images/error.jpg";
const ErrorPage = () => {
  return (
    <div className="error bg-white h-[100vh] flex items-center justify-center">
      <img className="lg:w-96 w-80 mx-auto" src={error} alt="" />
    </div>
  );
};

export default ErrorPage;
