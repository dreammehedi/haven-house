import { useEffect, useState } from "react";
import {
  FaAngleDoubleRight,
  FaBed,
  FaChartArea,
  FaShower,
} from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import img_404 from "../../assets/404_image.png";
import Button from "../../shareComponents/Button";
import Loader from "../../shareComponents/Loader";
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
    <section className="my-6 md:my-8 lg:my-10">
      <div className="container">
        <div className="border border-gray-50 shadow-md rounded-xl overflow-hidden">
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
            <p className="text-gray-400 text-wrap">{estate?.description}</p>

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
                    estate?.status === "sale" ? "bg-[#FDAE5C]" : "bg-[#FF5748]"
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
                    {estate?.location} Bath Rooms
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
            </div>
          </div>

          <div className="p-4 mb-4">
            <Link to={"/"} className="mr-auto !mt-6 ">
              <Button cls={"mr-auto"} name="Back Home"></Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EstateDetails;
