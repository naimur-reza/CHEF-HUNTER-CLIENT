import React from "react";
import Header from "../components/shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import "./Main.css";
const LoginLayout = () => {
  return (
    <div className="banner4">
      <Header />
      <div className="min-h-[calc(100vh-284px)] ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LoginLayout;
