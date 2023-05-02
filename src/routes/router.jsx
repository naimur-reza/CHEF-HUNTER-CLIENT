import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import RecipeLayout from "../layout/recipeLayout";
import Recipe from "../pages/Recipe";
import ErrorPage from "../pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    errorElement: <ErrorPage />,
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
  {
    path: "/recipe",
    element: <RecipeLayout />,
    children: [
      {
        path: "/recipe/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/recipe/${params.id}`),
        element: <Recipe />,
      },
    ],
  },
]);
export default router;
