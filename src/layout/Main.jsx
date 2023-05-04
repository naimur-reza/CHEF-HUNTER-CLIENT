import React from "react";
import Header from "../components/shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
// import banner from "../../src/assets/images/banner.jpg";
import "./Main.css";
import LazyLoad from "react-lazyload";
const Main = () => {
  return (
    <>
      <div>
        <Header />
        <div className=" banner2">
          <div className="min-h-[calc(100vh-284px)] ">
            <Outlet />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Main;
