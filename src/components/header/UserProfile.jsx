import PropTypes from "prop-types";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import Button from "../../shareComponents/Button";
function UserProfile({ mobileMenuActive, handleMenuActive }) {
  return (
    <div className="relative flex justify-between gap-4 md:gap-6 items-center">
      <div className="relative group">
        {/* <img
          className="w-[40px] md:w-[50px] object-cover cursor-pointer "
          src={userIcon}
          alt="userIcon"
        /> */}
        {/* <span className="absolute top-1/2 -translate-y-1/2 left-[-60px] hidden group-hover:inline-block bg-white font-bold font-poppins text-sm transition-all duration-300 ease-linear opacity-0 group-hover:opacity-100">
          Mehedi
        </span> */}
      </div>

      <Link to="/login">
        <Button cls="" name="Login"></Button>
      </Link>
      <div
        onClick={handleMenuActive}
        className={`${
          mobileMenuActive && "bg-green-500"
        } lg:hidden text-3xl cursor-pointer ring-1 ring-green-500 rounded-md hover:bg-green-500/50 transition-all duration-300 ease-linear overflow-hidden`}
      >
        {mobileMenuActive ? <IoClose></IoClose> : <IoMenu></IoMenu>}
      </div>
    </div>
  );
}
UserProfile.propTypes = {
  handleMenuActive: PropTypes.func,
  mobileMenuActive: PropTypes.bool,
};
export default UserProfile;
