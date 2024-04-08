import { FaBed, FaChartArea, FaShower } from "react-icons/fa";
import Button from "../../shareComponents/Button";

function EstateCart() {
  return (
    <div className="border border-gray-50 shadow-md rounded-xl overflow-hidden">
      {/* estate img */}
      <figure className="relative overflow-hidden cursor-pointer">
        <img
          className="rounded-xl w-full h-[250px] object-cover"
          src="https://preview.colorlib.com/theme/homes/img/room-pic/2.jpg.webp"
          alt=""
        />
        <span
          className={`absolute top-5 left-5 font-semibold text-sm font-nunito bg-[#FDAE5C] px-3 py-2 rounded-full inline-block mr-auto text-white`}
        >
          For Sale
        </span>
      </figure>
      {/* area */}
      <div className="p-4 flex justify-between items-center gap-2 md:gap-4">
        <p className="text-sm font-bold text-gray-500 flex items-center capitalize">
          <FaChartArea className="text-green-500/80 text-lg mr-1"></FaChartArea>
          1200 Sqft
        </p>
        <p className="text-sm font-bold text-gray-500 flex items-center capitalize">
          <FaBed className="text-green-500/80 text-lg mr-1"></FaBed>1 Bed
        </p>
        <p className="text-sm font-bold text-gray-500 flex items-center capitalize">
          <FaShower className="text-green-500/80 text-lg mr-1"></FaShower>2
          Shower
        </p>
      </div>

      {/* FF5748 rent color */}
      {/* FDAE5C sale color */}
      {/* estate title */}
      <div className="p-4 flex flex-col space-y-2 pb-8">
        <div className="flex justify-between gap-4 ">
          <span className="font-semibold text-lg text-gray-700 font-lato capitalize">
            segment
          </span>
          <h4 className="font-semibold text-sm font-nunito bg-green-500/50 px-3 py-2 rounded-full text-white cursor-pointer">
            Price: $33
          </h4>
        </div>
        <h2 className="font-bold text-2xl capitalize">
          Comfortable Apartment in Palace
        </h2>
        <p className="text-gray-400 text-wrap">
          Get started by choosing from one of our pre-built page templates to
          showcase your properties
        </p>

        <Button cls={"mr-auto"} name="View Property"></Button>
      </div>
    </div>
  );
}

export default EstateCart;
