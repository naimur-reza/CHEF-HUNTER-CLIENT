import React from "react";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import { Outlet } from "react-router-dom";

const RecipeLayout = () => {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-284px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RecipeLayout;
