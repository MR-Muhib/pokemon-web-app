import { NavLink } from "react-router-dom";
import Search from "./Search";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#ef5350] shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Left Side - Navigation Links */}
        <div>
          <NavLinks />
        </div>

        {/* Right Side - Search Bar */}
        <div className="flex items-center">
          <Search />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
