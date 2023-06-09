import React, { useContext, useState } from "react";
import { Link, Navigate, ScrollRestoration } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  //   get the function
  const { logIn, user, signInGoogle, signInGithub } = useContext(AuthContext);
  if (user) {
    return <Navigate to="/" />;
  }
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent
    logIn(email, password)
      .then((res) => {
        toast.success("login success");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div class="relative p-5 flex flex-col justify-center h-screen overflow-hidden">
      <ScrollRestoration />
      <div class="w-full p-6 m-auto bg-opacity-10 rounded-md shadow-md glass  lg:max-w-lg">
        <h1 class="text-3xl font-semibold text-center text-gray-200">
          Please Login
        </h1>
        <form onSubmit={handleLogin} class="space-y-4">
          <div>
            <label class="label">
              <span class="text-white label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              class="w-full input input-bordered  text-gray-700"
            />
          </div>
          <div>
            <label class="label">
              <span class="text-white label-text">Password</span>
            </label>
            <input
              required
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter Password"
              class="w-full input input-bordered  text-gray-700"
            />
          </div>
          <a
            href="#"
            class="text-xs text-gray-200 hover:underline hover:text-blue-600"
          >
            Forget Password?
          </a>
          <p className="text-xs text-gray-200  ">
            Don't have an account?{" "}
            <Link to={"../register"} className="hover:underline">
              Register
            </Link>
          </p>
          <div>
            <button class="btn btn-success btn-block bg-opacity-80 ">
              Login
            </button>
          </div>
          <div>
            <button
              onClick={signInGoogle}
              class="btn btn-outline btn-block inline-flex items-center gap-4"
            >
              <FcGoogle width={30} height={30} /> Continue With Google
            </button>
          </div>
          <div>
            <button
              onClick={signInGithub}
              class="btn btn-outline btn-block inline-flex items-center gap-4"
            >
              <FaGithub /> Continue With Github
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
