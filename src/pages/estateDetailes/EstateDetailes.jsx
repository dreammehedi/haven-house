import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaAngleDoubleRight,
  FaBed,
  FaChartArea,
  FaRestroom,
  FaShower,
} from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { GiMechanicGarage } from "react-icons/gi";
import { IoLocation } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import img_404 from "../../assets/404_image.png";
import Button from "../../shareComponents/Button";
import Loader from "../../shareComponents/Loader";

import author from "../../assets/author.jpg";
function EstateDetails() {
  // estate data
  const [estate, setEstate] = useState(null);
  const [loader, setLoader] = useState(true);

  //   dynamic id
  const { id } = useParams();
  // estate data fetching
  useEffect(() => {
    setLoader(true);
    async function fetchEstateData() {
      try {
        const response = await fetch(`/estate.json`);
        const data = await response.json();
        const estateData = data.estates.find(
          (estate) => estate.id === parseInt(id)
        );
        setEstate(estateData);
        setLoader(false);
      } catch (error) {
        console.error("Error fetching estate data:", error);
      }
    }
    fetchEstateData();
  }, [id]);

  // loader added
  if (loader) {
    return (
      <div className="flex justify-center items-center">
        <Loader></Loader>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Haven House | Estate Detailes {id}</title>
      </Helmet>
      <section className="my-6 md:my-8 lg:my-10">
        <div className="container grid grid-cols-1 lg:grid-cols-12 justify-between gap-6 lg:gap-8">
          <div className="lg:col-span-8 border border-gray-50 shadow-md rounded-xl overflow-hidden">
            {/* estate img */}
            <figure className="overflow-hidden cursor-pointer">
              <img
                className="rounded-xl w-full h-auto lg:h-[500px] object-cover"
                src={estate?.image || img_404}
                alt={`img ${id}`}
              />
            </figure>

            {/* estate title */}
            <div className="p-4 flex flex-col space-y-2 pb-8">
              <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl capitalize">
                {estate?.estate_title}
              </h2>
              <p className="text-gray-400 text-wrap w-full md:max-w-4xl">
                {estate?.long_description}
              </p>

              <div className="flex flex-col space-y-8 !mt-10">
                <div className="flex justify-start space-x-6  md:space-x-10 items-center w-full">
                  <span className="font-semibold text-lg text-slate-500 font-lato capitalize">
                    {estate?.segment_name}
                  </span>
                  <h4 className="font-semibold text-sm font-nunito  px-3 py-2 rounded-full text-green-500 ring-1 ring-green-500/50 cursor-pointer">
                    Price: {estate?.price}
                  </h4>
                  <span
                    className={`${
                      estate?.status === "sale"
                        ? "bg-[#FDAE5C]"
                        : "bg-[#FF5748]"
                    } font-semibold text-sm font-nunito  px-3 py-2 rounded-full inline-block mr-auto text-white capitalize`}
                  >
                    For {estate?.status}
                  </span>
                </div>

                {/* area */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-6 md:gap-8">
                  <div className="flex flex-col space-y-2 items-center capitalize bg-green-100 p-6 md:p-8 cursor-pointer transition-all duration-300 ease-linear hover:bg-green-200 hover:ring-1 hover:ring-green-500/50 rounded-xl">
                    <FaChartArea className="text-green-500/80 text-3xl md:text-4xl lg:text-5xl"></FaChartArea>
                    <p className="font-medium font-nunito text-gray-500">
                      <span className="font-medium font-nunito text-gray-900">
                        Area:
                      </span>{" "}
                      {estate?.area}
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2 items-center capitalize bg-green-100 p-6 md:p-8 cursor-pointer transition-all duration-300 ease-linear hover:bg-green-200 hover:ring-1 hover:ring-green-500/50 rounded-xl">
                    <FaBed className="text-green-500/80 text-3xl md:text-4xl lg:text-5xl"></FaBed>
                    <p className="font-medium font-nunito text-gray-500">
                      {estate?.bedrooms} Bed Rooms
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2 items-center capitalize bg-green-100 p-6 md:p-8 cursor-pointer transition-all duration-300 ease-linear hover:bg-green-200 hover:ring-1 hover:ring-green-500/50 rounded-xl">
                    <FaShower className="text-green-500/80 text-3xl md:text-4xl lg:text-5xl"></FaShower>
                    <p className="font-medium font-nunito text-gray-500">
                      {estate?.bathrooms} Bath Rooms
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2 items-center capitalize bg-green-100 p-6 md:p-8 cursor-pointer transition-all duration-300 ease-linear hover:bg-green-200 hover:ring-1 hover:ring-green-500/50 rounded-xl">
                    <IoLocation className="text-green-500/80 text-3xl md:text-4xl lg:text-5xl"></IoLocation>
                    <p className="font-medium font-nunito text-gray-500">
                      <span className="font-medium font-nunito text-gray-900">
                        {" "}
                        Location:
                      </span>{" "}
                      {estate?.location}
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2 items-center capitalize bg-green-100 p-6 md:p-8 cursor-pointer transition-all duration-300 ease-linear hover:bg-green-200 hover:ring-1 hover:ring-green-500/50 rounded-xl">
                    <FaKitchenSet className="text-green-500/80 text-3xl md:text-4xl lg:text-5xl"></FaKitchenSet>
                    <p className="font-medium font-nunito text-gray-500">
                      {estate?.kitchen} Kitchen
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2 items-center capitalize bg-green-100 p-6 md:p-8 cursor-pointer transition-all duration-300 ease-linear hover:bg-green-200 hover:ring-1 hover:ring-green-500/50 rounded-xl">
                    <GiMechanicGarage className="text-green-500/80 text-3xl md:text-4xl lg:text-5xl"></GiMechanicGarage>
                    <p className="font-medium font-nunito text-gray-500">
                      {estate?.garage} Garage
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2 items-center capitalize bg-green-100 p-6 md:p-8 cursor-pointer transition-all duration-300 ease-linear hover:bg-green-200 hover:ring-1 hover:ring-green-500/50 rounded-xl">
                    <FaRestroom className="text-green-500/80 text-3xl md:text-4xl lg:text-5xl"></FaRestroom>
                    <p className="font-medium font-nunito text-gray-500">
                      {estate?.living_room} Living Rooms
                    </p>
                  </div>
                </div>

                {/* facilities */}
                <div className="flex flex-col space-y-3">
                  <h1 className="font-bold text-xl md:text-2xl capitalize border-b border-gray-200 mr-auto">
                    Our Facilities
                  </h1>
                  <ul className="flex flex-col space-y-2 font-medium text-gray-400 font-lato">
                    {estate?.facilities.map((facilite, ind) => {
                      return (
                        <li key={ind} className="flex items-center">
                          <FaAngleDoubleRight className="mr-1"></FaAngleDoubleRight>{" "}
                          {facilite}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* amenities */}
                <div className="flex flex-col space-y-3">
                  <h1 className="font-bold text-xl md:text-2xl capitalize border-b border-gray-200 mr-auto">
                    Amenities
                  </h1>
                  <ul className="flex flex-col space-y-2 font-medium text-gray-400 font-lato">
                    {estate?.amenities.map((amenities, ind) => {
                      return (
                        <li key={ind} className="flex items-center">
                          <FaAngleDoubleRight className="mr-1"></FaAngleDoubleRight>{" "}
                          {amenities}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-4 mb-4">
              <Link to={"/"} className="mr-auto !mt-6 ">
                <Button cls={"mr-auto"} name="Back Home"></Button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4 border border-gray-50 shadow-md rounded-xl overflow-hidden p-4 h-fit flex flex-col space-y-2 justify-center items-center text-center ">
            <figure>
              <img
                className="rounded-full object-cover w-[200px] h-[200px]"
                src={author}
                alt="Mehedi"
              />
            </figure>
            <h2 className="font-extrabold text-xl font-lato">
              Mehedi Hassan Miraj
            </h2>
            <span className="text-gray-800 font-medium text-sm">
              dreammehedihassan@gmail.com
            </span>
            <h3 className="text-gray-700 font-medium">Front End Developer</h3>
            <p className="text-gray-400">
              As a frontend developer, you have an exciting journey ahead,
              working on user interfaces and creating engaging experiences for
              users.
            </p>
            <div className="flex items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-yellow-400 cursor-pointer"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-yellow-400 cursor-pointer"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-yellow-400 cursor-pointer"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-yellow-400 cursor-pointer"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer text-blue-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  ></path>
                </svg>
              </span>
            </div>
            <Link to="/contactus">
              <button className="px-3 py-2 rounded-full font-semibold text-[18px] bg-green-500/50 my-4 text-white transition-all duration-300 ease-linear hover:bg-green-500">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default EstateDetails;
