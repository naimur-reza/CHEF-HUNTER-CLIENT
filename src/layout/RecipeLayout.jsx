import React from "react";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import { Outlet } from "react-router-dom";
import "./Main.css";
const RecipeLayout = () => {
  return (
    <>
      <div className="recipe">
        <Header />
        <div className="min-h-[calc(100vh-284px)]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default RecipeLayout;
