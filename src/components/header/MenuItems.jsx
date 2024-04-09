import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const menuContent = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Update Profile", path: "/updateprofile" },
  { id: 3, name: "Register", path: "/register" },
];
function MenuItems({ handleMenuActive }) {
  return (
    <>
      {menuContent.map((item) => {
        const { id, name, path } = item;
        return (
          <li
            onClick={handleMenuActive}
            key={id}
            className="font-semibold capitalize"
          >
            <NavLink
              to={path}
              className={({ isActive }) => {
                return isActive ? "text-green-500" : "";
              }}
            >
              {name}
            </NavLink>
          </li>
        );
      })}
    </>
  );
}
MenuItems.propTypes = {
  handleMenuActive: PropTypes.func,
};
export default MenuItems;
