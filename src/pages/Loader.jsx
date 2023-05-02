import React from "react";
import { HashLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="min-h-[calc(100vh-284px)] flex items-center justify-center">
      <HashLoader color="#36d7b7" />
    </div>
  );
};

export default Loader;
