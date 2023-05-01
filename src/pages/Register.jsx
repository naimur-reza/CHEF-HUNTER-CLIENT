import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
const Register = () => {
  return (
    <div class=" p-5 flex flex-col justify-center ">
      <div class="w-full p-6 m-auto bg-white rounded-md shadow-md   lg:max-w-lg">
        <h1 class="text-3xl font-semibold text-center text-gray-700">
          Please Register
        </h1>
        <form class="space-y-4">
          <div>
            <label class="label">
              <span class="text-base label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              class="w-full input input-bordered"
            />
          </div>
          <div>
            <label class="label">
              <span class="text-base label-text">Photo Url</span>
            </label>
            <input
              type="text"
              placeholder="Photo Url"
              class="w-full input input-bordered"
            />
          </div>
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
            Already have an account?{" "}
            <Link to={"../login"} className="hover:underline">
              Login
            </Link>
          </p>
          <div>
            <button class="btn btn-success btn-block">Register</button>
          </div>
          <div>
            <button class="btn btn-success btn-block inline-flex items-center gap-4">
              <FcGoogle width={30} height={30} /> Continue With Google
            </button>
          </div>
          <div>
            <button class="btn btn-success btn-block">
              Continue With Github
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
