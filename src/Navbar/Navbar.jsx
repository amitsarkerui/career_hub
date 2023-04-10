import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ backgroundColor: "#F9F9FF" }}>
      <div className="container mx-auto px-3">
        <div className="flex flex-col items-center justify-between md:flex-row py-7">
          <div className="text-3xl font-bold">
            Pro<span className="text-purple-500">Jobs</span>
          </div>
          <div className="my-3">
            <ul className="flex gap-8 text-lg font-medium text-gray-600">
              <li>
                <Link to={"/statistics"}>Statistics</Link>
              </li>
              <li>
                <Link to={"/applied"}>Applied Jobs</Link>
              </li>
              <li>
                <Link to={"/blog"}>Blog</Link>
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
