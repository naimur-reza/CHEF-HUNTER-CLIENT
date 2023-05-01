import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
const Header = () => {
  return (
    <div className="navbar bg-base-100 my-container">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">Makunda</a>
      </div>

      <div className="navbar-end">
        <div className="space-x-5 font-semibold text-gray-700">
          <Link>Blog</Link>
          <Link>News</Link>
          <Link>Contact</Link>
        </div>
        <Link to={"/login"} className=" btn btn-circle btn-outline ml-3">
          <FaUserAlt className="" />
        </Link>
      </div>
    </div>
  );
};
export default Header;
