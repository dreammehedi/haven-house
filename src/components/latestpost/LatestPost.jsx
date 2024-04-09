import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import img_404 from "../../assets/404_image.png";
import Button from "../../shareComponents/Button";
function LatestPost({ latestPosts }) {
  return (
    <div className="space-y-6 md:space-y-8 mt-8">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold font-lato">
        Latest Posts
      </h1>
      {latestPosts.slice(0, 3).map((post) => {
        const { id, image, status, segment_name, price, estate_title } = post;

        return (
          <div key={id} className="shadow-md rounded-3xl overflow-hidden">
            {/* estate img */}
            <figure className="relative overflow-hidden cursor-pointer">
              <img
                className="rounded-xl w-full h-[250px] md:h-[350px] lg:h-[250px] object-cover"
                src={image || img_404}
                alt={`img ${id}`}
              />
              <span
                className={`${
                  status === "sale" ? "bg-[#FDAE5C]" : "bg-[#FF5748]"
                } absolute top-5 left-5 font-semibold text-sm font-nunito  px-3 py-2 rounded-full inline-block mr-auto text-white capitalize`}
              >
                For {status}
              </span>
            </figure>

            {/* estate title */}
            <div className="p-4 flex flex-col space-y-2 pb-8">
              <div className="flex justify-between gap-4 ">
                <span className="font-semibold text-lg text-gray-700 font-lato capitalize">
                  {segment_name}
                </span>
                <h4 className="font-semibold text-sm font-nunito bg-green-500/50 px-3 py-2 rounded-full text-white cursor-pointer">
                  Price: {price}
                </h4>
              </div>
              <h2 className="font-bold text-2xl capitalize">{estate_title}</h2>

              <Link to={`/estatedetailes/${id}`} className="mr-auto !mt-6">
                <Button cls={"mr-auto"} name="View Detailes"></Button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
LatestPost.propTypes = {
  latestPosts: PropTypes.array.isRequired,
};
export default LatestPost;
