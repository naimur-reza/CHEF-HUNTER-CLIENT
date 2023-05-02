import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loader from "../pages/Loader";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (user) {
    return children;
  }
  if (loading) {
    return <Loader />;
  }
  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoutes;
