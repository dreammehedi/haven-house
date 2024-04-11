import { NavLink } from "react-router-dom";
import Logo from "../../../components/header/Logo";
const footerLink = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Update Profile",
    path: "/updateprofile",
  },
  {
    id: 3,
    name: "Register",
    path: "/register",
  },
  {
    id: 4,
    name: "Login",
    path: "/login",
  },
  {
    id: 5,
    name: "Contact Us",
    path: "/contactus",
  },
  {
    id: 6,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 7,
    name: "About Us",
    path: "/aboutus",
  },
  {
    id: 8,
    name: "Shop",
    path: "/shop",
  },
];

const serviceData = [
  {
    id: 1,
    name: "Renting Services",
    path: "/renting-services",
  },
  {
    id: 2,
    name: "Selling Services",
    path: "/selling-services",
  },
  {
    id: 3,
    name: "Property Listing",
    path: "/property-listing",
  },
  {
    id: 4,
    name: "House Services",
    path: "/house-services",
  },
  {
    id: 5,
    name: "Property Management",
    path: "/property-management",
  },
  {
    id: 6,
    name: "House Keys",
    path: "/house-keys",
  },
];

function FooterTop() {
  return (
    <div className="container pt-8 mb-4 mb:mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center md:items-start text-center md:justify-between gap-6 md:gap-8 md:text-left lg:gap-10 pb-8 border-b border-gray-300 overflow-x-hidden">
      {/* main title & logo */}
      <div className="space-y-3 pb-4 lg:border-0 border-b border-gray-300">
        <Logo></Logo>

        <p data-aos="fade-up" data-aos-delay="500" className="text-gray-400">
          At Haven House, we believe in providing sanctuary, support, and hope
          to those in need. Founded in 2024, we have been dedicated to serving
          our community and offering a safe haven for individuals and families
          facing difficult circumstances.
        </p>
      </div>

      {/* service */}
      <div className="space-y-3 pb-4 lg:border-0 border-b border-gray-300">
        <h2
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="200"
          className=" text-2xl font-semibold text-gray-800"
        >
          Service
        </h2>
        <ul
          data-aos="fade-left"
          data-aos-delay="250"
          data-aos-duration="250"
          className="flex flex-col gap-4 "
        >
          {serviceData.map((service) => {
            const { id, name, path } = service;
            return (
              <li
                key={id}
                className="font-semibold capitalize transition-all duration-300 ease-linear hover:pl-1 hover:text-green-500"
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
        </ul>
      </div>

      {/* navigation */}
      <div className="space-y-3  pb-4 md:border-0 border-b border-gray-300">
        <h2
          data-aos="fade-left"
          data-aos-delay="250"
          data-aos-duration="250"
          className=" text-2xl font-semibold text-gray-800"
        >
          Navigation
        </h2>
        <ul
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="300"
          className="flex flex-col gap-4"
        >
          {footerLink.map((menu) => {
            const { id, name, path } = menu;
            return (
              <li
                key={id}
                className="font-semibold capitalize transition-all duration-300 ease-linear hover:pl-1 hover:text-green-500"
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
        </ul>
      </div>

      {/* contact us */}
      <div className="space-y-3 overflow-x-hidden">
        <h2
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="300"
          className=" text-2xl font-semibold text-gray-800"
        >
          Contact Us
        </h2>
        <ul
          data-aos="fade-left"
          data-aos-delay="350"
          data-aos-duration="350"
          className="space-y-2"
        >
          <li className="font-medium text-gray-400 text-wrap break-words">
            <p className="text-gray-800 font-bold">Email:</p>
            dreammehedihassan@gmail.com
          </li>
          <li className="font-medium text-gray-400">
            <p className="text-gray-800 font-bold">Phone:</p>
            (+880) 1716059182
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterTop;
