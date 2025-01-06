import NavLinks from "./NavLinks";

import logo from "../../assets/logo.png";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="w-full px-5 bg-[#ef5350] shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div>
          <img src={logo} alt="Logo" className="h-7 md:h-10 w-auto" />
        </div>

        <div className="">
          <Search />
        </div>
        {/* Right Side - Search Bar */}
        <div className="">
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
