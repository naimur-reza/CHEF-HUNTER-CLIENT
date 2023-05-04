import React from "react";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import {
  FaAddressBook,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const { displayName, emailVerified, email, photoURL } = user || {};

  return (
    <div className="my-container flex p-5 py-10 justify-center  ">
      <div className="mockup-window border  bg-white  bg-opacity-10 backdrop-blur-sm bg-transparent">
        <div className=" justify-center px-10 pt-6 pb-10  space-y-2">
          <img
            src={photoURL}
            className="avatar mask mask-hexagon mx-auto block "
            alt="profileImage"
          />
          <p>
            <span className="inline-flex items-center gap-2  font-semibold tracking-wider text-gray-100">
              <FaAddressBook /> Name :
            </span>{" "}
            {displayName}
          </p>
          <p>
            <span className="inline-flex items-center gap-2 font-semibold tracking-wider text-gray-100">
              <FaEnvelope /> Email:
            </span>{" "}
            {email}
          </p>
          <p>
            <span className="inline-flex items-center gap-2  font-semibold tracking-wider text-gray-100">
              <FaPhone /> Phone:
            </span>{" "}
            +996 669-669
          </p>
          <div className="flex gap-4 pt-5">
            <a href="https://www.facebook.com/iamrezadadu">
              <FaFacebook className="text-sky-400 cursor-pointer" />
            </a>

            <a href="https://github.com/naimur-reza">
              <FaGithub className="cursor-pointer" />
            </a>
            <a
              href="https://twitter.com/NaimurReza3
"
            >
              {" "}
              <FaTwitter className="text-sky-500 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
