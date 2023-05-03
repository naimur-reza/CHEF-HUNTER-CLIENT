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
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent
    logIn(email, password)
      .then((res) => {
        toast.success("login success");
        Navigate("/home");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div class="relative p-5 flex flex-col justify-center h-screen overflow-hidden">
      <ScrollRestoration />
      <div class="w-full p-6 m-auto bg-white rounded-md shadow-md   lg:max-w-lg">
        <h1 class="text-3xl font-semibold text-center text-gray-700">
          Please Login
        </h1>
        <form onSubmit={handleLogin} class="space-y-4">
          <div>
            <label class="label">
              <span class="text-base label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Email Address"
              class="w-full input input-bordered"
            />
          </div>
          <div>
            <label class="label">
              <span class="text-base label-text">Password</span>
            </label>
            <input
              required
              type="password"
              placeholder="Enter Password"
              class="w-full input input-bordered"
            />
          </div>
          <a
            href="#"
            class="text-xs text-gray-600 hover:underline hover:text-blue-600"
          >
            Forget Password?
          </a>
          <p className="text-xs text-gray-600  ">
            Don't have an account?{" "}
            <Link to={"../register"} className="hover:underline">
              Register
            </Link>
          </p>
          <div>
            <input
              required
              type="submit"
              placeholder="Login"
              class="btn btn-success btn-block"
            />
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
