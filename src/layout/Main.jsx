import React from "react";
import Header from "../components/shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-284px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
