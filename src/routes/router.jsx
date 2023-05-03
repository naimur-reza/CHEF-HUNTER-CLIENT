import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import RecipeLayout from "../layout/recipeLayout";
import Recipe from "../pages/Recipe";
import ErrorPage from "../pages/ErrorPage";
import Loader from "../pages/Loader";
import PrivateRoutes from "./PrivateRoutes";
import Blog from "../pages/Blog";
import News from "../pages/News";
import Contact from "../pages/Contact";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home/"></Navigate>,
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
        path: "/home/",
        element: <Home />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/recipe",
    element: <RecipeLayout />,
    children: [
      {
        path: "/recipe/:id",
        loader: ({ params }) =>
          fetch(
            `https://cookdens-server-naimur-reza.vercel.app/recipe/${params.id}`
          ),
        element: (
          <PrivateRoutes>
            <Recipe />
          </PrivateRoutes>
        ),
      },
      {
        path: "loader",
        element: <Loader />,
      },
    ],
  },
]);
export default router;
