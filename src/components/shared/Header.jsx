import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="bg-black bg-opacity-30 ">
      <div className="navbar  text-white my-container">
        <div className="navbar-start">
          <Link to={"/home"} className="btn btn-ghost normal-case text-2xl">
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
            <div
              data-tip={user?.email}
              className="dropdown tooltip tooltip-left tooltip-warning "
            >
              {" "}
              <button className="  btn btn-circle btn-outline ml-3">
                <img
                  className="rounded-full"
                  src={user?.photoURL}
                  alt="displayPhoto"
                />
              </button>
              <ul
                tabIndex={0}
                className="dropdown-content  menu p-2 shadow bg-black bg-opacity-70 rounded-box w-fit"
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
