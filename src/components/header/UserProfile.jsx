import PropTypes from "prop-types";
import { useContext } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import userIcon from "../../assets/userIcon.png";
import { AuthContext } from "../../auth/AuthProvider";
import Button from "../../shareComponents/Button";
function UserProfile({ mobileMenuActive, handleMenuActive }) {
  // check user is already logged in
  const { userInfo, handleLogout } = useContext(AuthContext);

  return (
    <>
      <div
        data-aos="fade-right"
        data-aos-anchor="#navbar-bottom"
        className="relative flex justify-between gap-4 md:gap-6 items-center"
      >
        {/* user informtaion after login */}
        {userInfo && (
          <figure className="relative group">
            <img
              className="ring ring-green-500/50 w-[40px] md:w-[50px] rounded-full object-cover cursor-pointer transition-all duration-300 ease-linear"
              src={userInfo?.photoURL || userIcon}
              alt="userIcon"
            />
            <h4 className="absolute z-[99] group-hover:inline-block top-1/2 right-[50px] hidden bg-green-500/50 max-w-[250px] min-w-[200px] -translate-y-1/2 rounded-3xl text-center text-slate-600 py-1 font-bold font-poppins text-sm transition-all duration-300 ease-linear  group-hover:opacity-100">
              {userInfo?.displayName || userInfo?.email}
            </h4>
          </figure>
        )}
        {/* login or logout button */}
        {userInfo ? (
          <Button
            onClick={() => {
              handleLogout()
                .then(() => {
                  toast.success("Logout Success!");
                })
                .catch(() => {
                  toast.error("Something went wrong!");
                });
            }}
            name="Logout"
          ></Button>
        ) : (
          <Link to="/login">
            <Button name="Login"></Button>
          </Link>
        )}
        <div
          onClick={handleMenuActive}
          className={`${
            mobileMenuActive && "bg-green-500"
          } lg:hidden text-3xl cursor-pointer ring-1 ring-green-500 rounded-md hover:bg-green-500/50 transition-all duration-300 ease-linear overflow-hidden`}
        >
          {mobileMenuActive ? <IoClose></IoClose> : <IoMenu></IoMenu>}
        </div>
      </div>
    </>
  );
}
UserProfile.propTypes = {
  handleMenuActive: PropTypes.func,
  mobileMenuActive: PropTypes.bool,
};
export default UserProfile;
