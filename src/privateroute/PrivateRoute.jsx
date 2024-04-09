import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
function PrivateRoute({ children }) {
  // user info data get
  const { userInfo } = useContext(AuthContext);

  // user not found navigate login page
  if (!userInfo) {
    return <Navigate to="/login"></Navigate>;
  }

  // user found display data
  return children;
}
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivateRoute;
