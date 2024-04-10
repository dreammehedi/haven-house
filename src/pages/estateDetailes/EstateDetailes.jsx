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
            <figure
              data-aos="fade-up"
              data-aos-delay={100}
              className="overflow-hidden cursor-pointer"
            >
              <img
                className="rounded-xl w-full h-auto lg:h-[500px] object-cover"
                src={estate?.image || img_404}
                alt={`img ${id}`}
              />
            </figure>

            {/* estate title */}
            <div className="p-4 flex flex-col space-y-2 pb-8">
              <h2
                data-aos="fade-up-left"
                data-aos-delay="100"
                className="font-bold text-2xl md:text-3xl lg:text-4xl capitalize"
              >
                {estate?.estate_title}
              </h2>
              <p
                data-aos="fade-up-left"
                data-aos-delay="150"
                className="text-gray-400 text-wrap w-full md:max-w-4xl"
              >
                {estate?.long_description}
              </p>

              <div className="flex flex-col space-y-8 !mt-10">
                <div className="flex justify-start space-x-6  md:space-x-10 items-center w-full">
                  <span
                    data-aos="fade-left"
                    data-aos-delay="200"
                    data-aos-duration="400"
                    className="font-semibold text-lg text-slate-500 font-lato capitalize"
                  >
                    {estate?.segment_name}
                  </span>
                  <h4
                    data-aos="fade-left"
                    data-aos-delay="250"
                    data-aos-duration="500"
                    className="font-semibold text-sm font-nunito  px-3 py-2 rounded-full text-green-500 ring-1 ring-green-500/50 cursor-pointer"
                  >
                    Price: {estate?.price}
                  </h4>
                  <span
                    data-aos="fade-left"
                    data-aos-delay="300"
                    data-aos-duration="600"
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
                  <EstateDetailesItem delay={200} duration={400}>
                    <FaChartArea className="text-green-500/80 text-5xl"></FaChartArea>
                    <p className="font-medium font-nunito text-gray-500">
                      <span className="font-medium font-nunito text-gray-900">
                        Area:
                      </span>{" "}
                      {estate?.area}
                    </p>
                  </EstateDetailesItem>
                  <EstateDetailesItem delay={300} duration={500}>
                    <FaBed className="text-green-500/80 text-5xl"></FaBed>
                    <p className="font-medium font-nunito text-gray-500">
                      {estate?.bedrooms} Bed Rooms
                    </p>
                  </EstateDetailesItem>
                  <EstateDetailesItem delay={400} duration={600}>
                    {" "}
                    <FaShower className="text-green-500/80 text-5xl"></FaShower>
                    <p className="font-medium font-nunito text-gray-500">
                      {estate?.bathrooms} Bath Rooms
                    </p>
                  </EstateDetailesItem>
                  <EstateDetailesItem delay={500} duration={700}>
                    <IoLocation className="text-green-500/80 text-5xl"></IoLocation>
                    <p className="font-medium font-nunito text-gray-500">
                      <span className="font-medium font-nunito text-gray-900">
                        {" "}
                        Location:
                      </span>{" "}
                      {estate?.location}
                    </p>
                  </EstateDetailesItem>
                  <EstateDetailesItem delay={600} duration={800}>
                    <FaKitchenSet className="text-green-500/80 text-5xl"></FaKitchenSet>
                    <p className="font-medium font-nunito text-gray-500">
                      {estate?.kitchen} Kitchen
                    </p>
                  </EstateDetailesItem>
                  <EstateDetailesItem delay={700} duration={900}>
                    <GiMechanicGarage className="text-green-500/80 text-5xl"></GiMechanicGarage>
                    <p className="font-medium font-nunito text-gray-500">
                      {estate?.garage} Garage
                    </p>
                  </EstateDetailesItem>
                  <EstateDetailesItem delay={800} duration={1000}>
                    <FaRestroom className="text-green-500/80 text-5xl"></FaRestroom>
                    <p className="font-medium font-nunito text-gray-500">
                      {estate?.living_room} Living Rooms
                    </p>
                  </EstateDetailesItem>
                </div>

                {/* facilities */}
                <div className="flex flex-col space-y-3">
                  <h1
                    data-aos="fade-down"
                    data-aos-delay="400"
                    className="font-bold text-xl md:text-2xl capitalize border-b border-gray-200 mr-auto"
                  >
                    Our Facilities
                  </h1>
                  <ul className="flex flex-col space-y-2 font-medium text-gray-400 font-lato">
                    {estate?.facilities.map((facilite, ind) => {
                      return (
                        <li
                          data-aos="fade-down"
                          data-aos-delay={200 * ind}
                          key={ind}
                          className="flex items-center"
                        >
                          <FaAngleDoubleRight className="mr-1"></FaAngleDoubleRight>{" "}
                          {facilite}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* amenities */}
                <div className="flex flex-col space-y-3">
                  <h1
                    data-aos="fade-down"
                    data-aos-delay="700"
                    className="font-bold text-xl md:text-2xl capitalize border-b border-gray-200 mr-auto"
                  >
                    Amenities
                  </h1>
                  <ul className="flex flex-col space-y-2 font-medium text-gray-400 font-lato">
                    {estate?.amenities.map((amenities, ind) => {
                      return (
                        <li
                          data-aos="fade-down"
                          data-aos-delay={200 * ind}
                          key={ind}
                          className="flex items-center"
                        >
                          <FaAngleDoubleRight className="mr-1"></FaAngleDoubleRight>{" "}
                          {amenities}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-down"
              data-aos-delay="1600"
              className="p-4 mb-4"
            >
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
