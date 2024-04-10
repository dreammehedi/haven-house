import PropTypes from "prop-types";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";
const menuContent = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Contact Us", path: "/contactus" },
];

function MenuItems({ handleMenuActive }) {
  const register = (
    <li onClick={handleMenuActive} className="font-semibold capitalize">
      <NavLink
        to={"/register"}
        className={({ isActive }) => {
          return isActive ? "text-green-500" : "";
        }}
      >
        Register
      </NavLink>
    </li>
  );
  const updateprofile = (
    <li onClick={handleMenuActive} className="font-semibold capitalize">
      <NavLink
        to={"/updateprofile"}
        className={({ isActive }) => {
          return isActive ? "text-green-500" : "";
        }}
      >
        Update Profile
      </NavLink>
    </li>
  );
  // user already login
  const { userInfo } = useContext(AuthContext);
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
      {userInfo ? updateprofile : register}
    </>
  );
}
MenuItems.propTypes = {
  handleMenuActive: PropTypes.func,
};
export default MenuItems;
