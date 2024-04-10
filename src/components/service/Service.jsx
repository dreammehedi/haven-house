import PropTypes from "prop-types";

function Service({ children, name, delay }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration={300 * delay}
      className="flex flex-col justify-center items-center text-center space-y-2"
    >
      <div className="w-[130px] h-[130px] rounded-full flex justify-center items-center text-center bg-white ring-1 ring-green-500 border-4 border-green-50 transition-all duration-300 ease-linear hover:bg-green-500/20">
        {children}
      </div>
      <h3 className="text-xl font-extrabold capitalize text-gray-600">
        {name}
      </h3>
    </div>
  );
}
Service.propTypes = {
  delay: PropTypes.number,
  name: PropTypes.string,
  children: PropTypes.node,
};
export default Service;
