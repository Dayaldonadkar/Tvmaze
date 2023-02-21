import React, { useState } from "react";
import Data from "./Data";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="bg-[#3f3f3f] h-20 flex justify-center items-center">
      <div className="flex w-3/5 justify-between">
        <div>
          <Link to="/">
            <img
              className="w-40 h-12"
              src="https://static.tvmaze.com/images/tvm-header-logo.png"
              alt="logo"
            />
          </Link>
        </div>

        <div className="flex items-center">
          <input
            className=" bg-white h-10 w-96 rounded-l-lg"
            placeholder="Search shows and people"
          />
          <button className="bg-[#3C948B] h-10 rounded-r-lg">Search</button>
        </div>

        <div className="flex items-center text-2xl text-white font-light space-x-4">
          <h1>Login</h1>
          <h1>Register</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
