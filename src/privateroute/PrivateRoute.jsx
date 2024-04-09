import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import Loader from "../shareComponents/Loader";
function PrivateRoute({ children }) {
  // current location
  const { pathname } = useLocation();

  // user info data get
  const { userInfo, userLoader } = useContext(AuthContext);

  // page refresh redirect handler
  if (userLoader) {
    return (
      <div className="flex justify-center items-center">
        <Loader></Loader>
      </div>
    );
  }

  // user not found navigate login page
  if (userInfo) {
    return children;
  }

  // user found display data
  return <Navigate to="/login" state={pathname}></Navigate>;
}
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PrivateRoute;
