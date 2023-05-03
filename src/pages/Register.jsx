import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
const Register = () => {
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { user, signInGoogle, createUser, profileUpdate } =
    useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    createUser(email, password)
      .then((res) => {
        profileUpdate(name, photoUrl)
          .then(() => {
            console.log(res.user);
            toast.success("Registration successful");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div class=" p-5 flex flex-col justify-center ">
      <div class="w-full p-6 m-auto bg-white rounded-md shadow-md   lg:max-w-lg">
        <h1 class="text-3xl font-semibold text-center text-gray-700">
          Please Register
        </h1>
        <form onSubmit={handleRegister} class="space-y-4">
          <div>
            <label class="label">
              <span class="text-base label-text">Name</span>
            </label>
            <input
              type="text"
              required
              placeholder="Enter Name"
              class="w-full input input-bordered"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label class="label">
              <span class="text-base label-text">Photo Url</span>
            </label>
            <input
              type="text"
              required
              placeholder="Photo Url"
              class="w-full input input-bordered"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
          </div>
          <div>
            <label class="label">
              <span class="text-base label-text">Email</span>
            </label>
            <input
              required
              type="text"
              placeholder="Email Address"
              class="w-full input input-bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            <button
              onClick={signInGoogle}
              class="btn btn-outline btn-block inline-flex items-center gap-4"
            >
              <FcGoogle width={30} height={30} /> Continue With Google
            </button>
          </div>
          <div>
            <button class="btn btn-outline btn-block inline-flex items-center gap-4">
              <FaGithub /> Continue With Github
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
