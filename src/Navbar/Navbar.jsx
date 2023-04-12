import React from "react";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

const Navbar = () => {
  return (
    <div style={{ backgroundColor: "#F9F9FF" }}>
      <div className="container mx-auto px-3">
        <div className="flex flex-col items-center justify-between md:flex-row py-7">
          <div className="text-3xl font-bold">
            <Link to={"/"}>
              Pro<span className="text-purple-500">Jobs</span>
            </Link>
          </div>
          <div className="my-3">
            <ul className="flex gap-8 text-lg font-medium text-gray-600">
              <li>
                <ActiveLink to={"/"}>Home</ActiveLink>
              </li>
              <li>
                <ActiveLink to={"/statistics"}>Statistics</ActiveLink>
              </li>
              <li>
                <ActiveLink to={"/applied"}>Applied Jobs</ActiveLink>
              </li>
              <li>
                <ActiveLink to={"/blog"}>Blog</ActiveLink>
              </li>
            </ul>
          </div>
          <div>
            <button className="bg-purple-500 py-3 px-6 rounded-md text-lg font-medium text-white hover:bg-blue-500">
              Start Applying
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
