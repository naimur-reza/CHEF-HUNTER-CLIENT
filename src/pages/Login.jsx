import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div class="relative p-5 flex flex-col justify-center h-screen overflow-hidden">
      <div class="w-full p-6 m-auto bg-white rounded-md shadow-md   lg:max-w-lg">
        <h1 class="text-3xl font-semibold text-center text-gray-700">
          Please Login
        </h1>
        <form class="space-y-4">
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
            <button class="btn btn-success btn-block">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
