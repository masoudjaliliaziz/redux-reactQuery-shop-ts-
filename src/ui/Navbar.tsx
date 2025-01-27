import React from "react";
import { HiHome, HiShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="  p-3 flex flex-col justify-start items-center gap-3  left-1.5 top-1.5 row-span-12 col-span-1 shadow-2xl  ">
      {" "}
      <Link
        to={"/"}
        className="flex flex-col justify-center items-center  hover:bg-slate-500 hover:text-white p-0.5 rounded-md"
      >
        <HiHome className="text-3xl  " />
        <p className="text-xs font-semibold">home</p>
      </Link>
      <Link
        to={"/cart"}
        className="flex flex-col justify-center items-center  hover:bg-slate-500 hover:text-white p-0.5 rounded-md"
      >
        <HiShoppingBag className="text-3xl " />
        <p className="text-xs font-semibold">Cart</p>
      </Link>
    </div>
  );
}

export default Navbar;
