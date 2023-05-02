import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="bg-black bg-transparent bg-opacity-20">
      <div className="navbar  text-white my-container">
        <div className="navbar-start">
          <Link to={"/home"} className="btn btn-ghost normal-case text-xl">
            CooksDen
          </Link>
        </div>

        <div className="navbar-end">
          <div className="space-x-5 font-semibold text-white">
            <Link>Blog</Link>
            <Link>News</Link>
            <Link>Contact</Link>
          </div>
          {user ? (
            <div className="dropdown ">
              {" "}
              <Link to={"/login"} className="  btn btn-circle btn-outline ml-3">
                <img
                  className="rounded-full"
                  src={user?.photoURL}
                  alt="displayPhoto"
                />
              </Link>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link className="text-white" to={"/profile"}>
                    Profile
                  </Link>
                </li>
                <li>
                  <Link className="text-white" onClick={logOut}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to={"/login"}
              className=" btn btn-circle btn-outline ml-3 text-white"
            >
              <FaUserAlt className="" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
