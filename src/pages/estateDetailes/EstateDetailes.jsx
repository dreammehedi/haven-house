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
import Author from "../../components/author/Author";
import LatestPost from "../../components/latestpost/LatestPost";
import Button from "../../shareComponents/Button";
import Loader from "../../shareComponents/Loader";
import EstateDetailesItem from "./EstateDetailesItem";

function EstateDetails() {
  // estate latest post data
  const [latestPosts, setLatestPosts] = useState([]);
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
        setLatestPosts(data.estates);
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
          <div className="lg:col-span-8 border border-gray-50 shadow-md rounded-xl overflow-hidden h-fit">
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
                  <EstateDetailesItem>
                    <FaChartArea className="text-green-500/80 text-5xl"></FaChartArea>
                    <p className="font-medium font-nunito text-gray-500">
                      <span className="font-medium font-nunito text-gray-900">
                        Area:
                      </span>{" "}
                      {estate?.area}
                    </p>
                  </EstateDetailesItem>
                  <EstateDetailesItem>
                    <FaBed className="text-green-500/80 text-5xl"></FaBed>
                    <p className="font-medium font-nunito text-gray-500">
                      {estate?.bedrooms} Bed Rooms
                    </p>
                  </EstateDetailesItem>
                  <EstateDetailesItem>
                    {" "}
                    <FaShower className="text-green-500/80 text-5xl"></FaShower>
                    <p className="font-medium font-nunito text-gray-500">
                      {estate?.bathrooms} Bath Rooms
                    </p>
                  </EstateDetailesItem>
                  <EstateDetailesItem>
                    <IoLocation className="text-green-500/80 text-5xl"></IoLocation>
                    <p className="font-medium font-nunito text-gray-500">
                      <span className="font-medium font-nunito text-gray-900">
                        {" "}
                        Location:
                      </span>{" "}
                      {estate?.location}
                    </p>
                  </EstateDetailesItem>
                  <EstateDetailesItem>
                    <FaKitchenSet className="text-green-500/80 text-5xl"></FaKitchenSet>
                    <p className="font-medium font-nunito text-gray-500">
                      {estate?.kitchen} Kitchen
                    </p>
                  </EstateDetailesItem>
                  <EstateDetailesItem>
                    <GiMechanicGarage className="text-green-500/80 text-5xl"></GiMechanicGarage>
                    <p className="font-medium font-nunito text-gray-500">
                      {estate?.garage} Garage
                    </p>
                  </EstateDetailesItem>
                  <EstateDetailesItem>
                    <FaRestroom className="text-green-500/80 text-5xl"></FaRestroom>
                    <p className="font-medium font-nunito text-gray-500">
                      {estate?.living_room} Living Rooms
                    </p>
                  </EstateDetailesItem>
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
          <div className="lg:col-span-4 border border-gray-50 shadow-md rounded-xl overflow-hidden p-4 h-fit  ">
            <Author></Author>
            <LatestPost latestPosts={latestPosts}></LatestPost>
          </div>
        </div>
      </section>
    </>
  );
}

export default EstateDetails;
