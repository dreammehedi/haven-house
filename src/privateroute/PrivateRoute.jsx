import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
function PrivateRoute({ children }) {
  // current location
  const { pathname } = useLocation();

  // user info data get
  const { userInfo } = useContext(AuthContext);

  // user not found navigate login page
  if (!userInfo) {
    return <Navigate to="/login" state={pathname}></Navigate>;
  }

  // user found display data
  return children;
}
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivateRoute;
