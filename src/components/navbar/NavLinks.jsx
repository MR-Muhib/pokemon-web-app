import PropTypes from "prop-types";
import { NavLink as RouterNavLink, useLocation } from "react-router-dom";

function NavLinks() {
  const location = useLocation();

  return (
    <div className="flex">
      <NavLink title="Home" url="/" isActive={location.pathname === "/"} />
      <NavLink title="Favorites" url="/favorites" isActive={location.pathname === "/favorites"} />
    </div>
  );
}

// nav links component
const NavLink = ({ title, url, isActive }) => {
  const classList = isActive ? "navlinks_active" : "navlinks";
  return (
    <RouterNavLink to={url} className={classList}>
      {title}
    </RouterNavLink>
  );
};

// prop-types
NavLink.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default NavLinks;
