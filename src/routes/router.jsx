import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/home"></Navigate>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "home",
    element: <Main></Main>,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);
export default router;