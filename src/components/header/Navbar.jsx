import { useState } from "react";
// import { AuthContext } from "../../auth/AuthProvider";
import Logo from "./Logo";
import MenuItems from "./MenuItems";
import UserProfile from "./UserProfile";

function Navbar() {
  // const { user } = useContext(AuthContext);
  // console.log(user);
  // mobile menu active
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const handleMenuActive = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  return (
    <div className={`bg-white  w-full transition-all duration-300 ease-linear`}>
      <nav className="container flex justify-between items-center py-3">
        <Logo></Logo>

        {/* mobile & tablet menu */}
        <ul
          className={`${
            mobileMenuActive ? "left-0" : "-left-full"
          } flex flex-col lg:hidden px-8 py-12 gap-6 font-lato bg-white w-3/5 h-screen fixed top-0  z-[99999] shadow-md transition-all duration-300 ease-linear`}
        >
          <MenuItems handleMenuActive={handleMenuActive}></MenuItems>
        </ul>

        {/* desktop menu */}
        <ul className="hidden lg:flex justify-center items-center gap-6 md:gap-8 font-lato">
          <MenuItems></MenuItems>
        </ul>
        <UserProfile
          mobileMenuActive={mobileMenuActive}
          handleMenuActive={handleMenuActive}
        ></UserProfile>
      </nav>
    </div>
  );
}

export default Navbar;
