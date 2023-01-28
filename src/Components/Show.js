import React from "react";
import { Link } from "react-router-dom";

const Show = () => {
  return (
    <div className="flex justify-center bg-[#3C948B]">
      <div className="flex justify-between font-light text-white w-3/5">
        <Link to="/">
          <h1 className="">Shows</h1>
        </Link>
        <h1>People</h1>
        <h1>Network</h1>
        <h1>Web Channels</h1>
        <h1>Article</h1>
      </div>
    </div>
  );
};

export default Show;
