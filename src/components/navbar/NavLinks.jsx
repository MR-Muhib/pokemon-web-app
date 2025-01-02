import PropTypes from "prop-types";
import { NavLink as RouterNavLink } from "react-router-dom";

function NavLinks() {
  return (
    <div className="flex">
      <NavLink title="Home" url="/" isActive={true} />
      <NavLink title="Favorites" url="/favorites" isActive={false} />
    </div>
  );
}

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
