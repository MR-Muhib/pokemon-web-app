import NavLinks from "./NavLinks";

import logo from "../../assets/logo.png";
import Search from "./Search";
import { useState } from "react";

const Navbar = () => {
  return (
    <nav className="w-full  bg-[#ef5350] shadow-md">
      <div className="container py-4 px-5 mx-auto">
        <div className=" flex items-center justify-between ">
          <div className="">
            <img src={logo} alt="Logo" className="h-7 md:h-10 w-auto" />
          </div>

          <div className="hidden md:block">
            <Search />
          </div>

          {/* Right Side - Search Bar */}
          <div className="">
            <NavLinks />
          </div>
        </div>

        <div className="block md:hidden mt-4">
          <Search />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
