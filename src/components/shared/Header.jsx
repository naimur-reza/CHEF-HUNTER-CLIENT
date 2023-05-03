import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { Fade as Hamburger } from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="bg-black bg-opacity-30 ">
      <div className="navbar  text-white my-container">
        <div className="navbar-start">
          <NavLink to={"/home/"} className="btn btn-ghost normal-case text-2xl">
            CooksDen
          </NavLink>
        </div>

        <div
          className={`marker:lg:navbar-end absolute lg:flex-row flex-col items-center  flex z-10 duration-500  w-40 rounded-br-lg rounded-bl-lg   p-7 lg:p-0 lg:h-auto bg-green-200 lg:static ${
            isOpen ? "top-0" : "-top-96"
          }`}
        >
          <div className="space-x-0 lg:space-x-5 space-y-2  lg:space-y-0  font-semibold text-white flex flex-col lg:flex-row">
            <NavLink
              to={"/home/"}
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "text-white"
              }
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "text-white"
              }
              to={"../home/blog"}
            >
              Blog
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "text-white"
              }
              to={"../home/news"}
            >
              News
            </NavLink>
            <NavLink
              to={"../home/contact"}
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "text-white"
              }
            >
              Contact
            </NavLink>
          </div>
          {user ? (
            <div
              data-tip={user?.email}
              className="dropdown tooltip tooltip-left tooltip-warning "
            >
              {" "}
              <button className=" btn btn-circle avatar online   btn-outline lg:ml-3">
                <img
                  className="rounded-full ring-4"
                  src={user?.photoURL}
                  alt="displayPhoto"
                />
              </button>
              <ul
                tabIndex={0}
                className="dropdown-content   menu p-2 shadow bg-black bg-opacity-70 rounded-box w-fit"
              >
                <li>
                  <NavLink className="text-white" to={"/profile"}>
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-white" onClick={logOut}>
                    Logout
                  </NavLink>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink
              to={"/login"}
              className=" btn btn-circle btn-outline lg:ml-3 mt-3 mr-2 lg:mr-0 lg:mt-0 text-white"
            >
              <FaUserAlt className="" />
            </NavLink>
          )}
        </div>
        <div className="ml-auto">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
    </div>
  );
};
export default Header;
