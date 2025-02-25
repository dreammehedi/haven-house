import { useEffect, useState } from "react";
import Logo from "./Logo";
import MenuItems from "./MenuItems";
import UserProfile from "./UserProfile";

function Navbar() {
  // sticky navbar
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const stickyNav = () => {
      if (window.scrollY > 300) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", stickyNav);

    return () => {
      window.removeEventListener("scroll", stickyNav);
    };
  }, []);

  // mobile menu active
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const handleMenuActive = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  return (
    <div
      data-aos-anchor="#navbar-bottom"
      className={`${
        sticky && "sticky top-0 z-[9999] shadow-md"
      }  bg-white w-full transition-all duration-300 ease-linear `}
    >
      <nav className="container flex justify-between items-center py-3 relative">
        <div data-aos="fade-left" data-aos-anchor="#navbar-bottom">
          <Logo></Logo>
        </div>

        {/* mobile & tablet menu */}
        <ul
          className={`${
            mobileMenuActive ? "left-0" : "-left-full"
          } flex flex-col lg:hidden px-8 py-12 gap-6 font-lato bg-white w-3/5 h-screen fixed top-0  z-[99999] shadow-md transition-all duration-300 ease-linear`}
        >
          <MenuItems handleMenuActive={handleMenuActive}></MenuItems>
        </ul>

        {/* desktop menu */}
        <ul
          data-aos="zoom-in-up"
          data-aos-anchor="#navbar-bottom"
          className="hidden lg:flex justify-center items-center gap-6 md:gap-8 font-lato"
        >
          <MenuItems></MenuItems>
        </ul>
        <UserProfile
          mobileMenuActive={mobileMenuActive}
          handleMenuActive={handleMenuActive}
        ></UserProfile>

        <div
          id="navbar-bottom"
          className="bg-transparent opacity-0 size-5 fixed bottom-[300px] right-0"
        ></div>
      </nav>
    </div>
  );
}

export default Navbar;
