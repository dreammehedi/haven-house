import PropTypes from "prop-types";
import { FaBed, FaChartArea, FaShower } from "react-icons/fa";
import { Link } from "react-router-dom";
import img_404 from "../../assets/404_image.png";
import Button from "../../shareComponents/Button";
function EstateCart({ estate }) {
  const {
    id,
    image,
    segment_name,
    estate_title,
    description,
    price,
    status,
    area,
    bedrooms,
    bathrooms,
    delay,
  } = estate;
  return (
    <div className="border border-gray-50 shadow-md rounded-xl overflow-hidden transition-all duration-300 ease-linear hover:scale-[1.01]">
      {/* estate img */}
      <figure className="relative overflow-hidden cursor-pointer">
        <img
          data-aos="fade-up"
          data-aos-delay={delay + 100}
          className="rounded-xl w-full h-[250px] object-cover"
          src={image || img_404}
          alt={`img ${id}`}
        />
        <span
          data-aos="fade-up"
          data-aos-delay={delay}
          className={`${
            status === "sale" ? "bg-[#FDAE5C]" : "bg-[#FF5748]"
          } absolute top-5 left-5 font-semibold text-sm font-nunito  px-3 py-2 rounded-full inline-block mr-auto text-white capitalize`}
        >
          For {status}
        </span>
      </figure>
      {/* area */}
      <div className="p-4 flex flex-wrap justify-between items-center gap-2 md:gap-4">
        <p
          data-aos="fade-up"
          data-aos-delay={delay}
          className="text-sm font-bold text-gray-500 flex items-center capitalize"
        >
          <FaChartArea className="text-green-500/80 text-lg mr-1"></FaChartArea>
          {area}
        </p>
        <p
          data-aos="fade-up"
          data-aos-delay={delay + 100}
          className="text-sm font-bold text-gray-500 flex items-center capitalize"
        >
          <FaBed className="text-green-500/80 text-lg mr-1"></FaBed>
          {bedrooms} Bed Rooms
        </p>
        <p
          data-aos="fade-up"
          data-aos-delay={delay + 200}
          className="text-sm font-bold text-gray-500 flex items-center capitalize"
        >
          <FaShower className="text-green-500/80 text-lg mr-1"></FaShower>
          {bathrooms} Bath Rooms
        </p>
      </div>

      {/* estate title */}
      <div className="p-4 flex flex-col space-y-2 pb-8">
        <div className="flex justify-between gap-4 ">
          <span
            data-aos="fade-up"
            data-aos-delay={delay + 200}
            className="font-semibold text-lg text-gray-700 font-lato capitalize"
          >
            {segment_name}
          </span>
          <h4
            data-aos="fade-up"
            data-aos-delay={delay + 300}
            className="font-semibold text-sm font-nunito bg-green-500/80 px-3 py-2 rounded-full text-white cursor-pointer"
          >
            Price: {price}
          </h4>
        </div>
        <h2
          data-aos="fade-up"
          data-aos-delay={delay + 400}
          className="font-bold text-2xl capitalize"
        >
          {estate_title}
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay={delay + 500}
          className="text-gray-400 text-wrap"
        >
          {description}
        </p>

        <Link
          data-aos="fade-up"
          data-aos-delay={delay + 600}
          to={`/estatedetailes/${id}`}
          className="mr-auto !mt-6"
        >
          <Button cls={"mr-auto"} name="View Property"></Button>
        </Link>
      </div>
    </div>
  );
}
EstateCart.propTypes = {
  estate: PropTypes.object.isRequired,
};
export default EstateCart;
