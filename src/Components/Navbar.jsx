import React from "react";
import { FcCloseUpMode } from "react-icons/fc";
const Navbar = () => {
  return (
    <div className="bg-white h-[60px] my-4 rounded-lg flex justify-center items-center gap-3 text-xl font-medium">
      <img src="firebase.svg" alt="" />
      <h1 className="flex justify-center items-center text-2xl">
        Firebase Contact App
        <FcCloseUpMode />
      </h1>
    </div>
  );
};

export default Navbar;
